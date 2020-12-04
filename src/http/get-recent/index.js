const { API_KEY } = process.env;
const { lookup, validate } = require('../lib/region');
const SnowyOwl = require('../lib/bird/snowy-owl');

const eBirdRequest = (regionCode) => {
  const owl = new SnowyOwl(API_KEY);
  return owl.recentObservations(regionCode);
};

const getRegionParam = (req) => {
  if (req.queryStringParameters) {
    return req.queryStringParameters.region;
  }
  return 'CA';
};

const create200 = (body) => ({
  statusCode: 200,
  headers: {
    // TODO: figure out caching for responses...
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const create500 = (error) => ({
  statusCode: 500,
  headers: {
    'Content-Type': 'application/json',
  },
  body: error,
});

const create400 = () => ({
  statusCode: 400,
  headers: {
    'Content-Type': 'application/json',
  },
  body: 'invalid region: must be a valid Canadian region code',
});

exports.handler = async function recent(req) {
  const region = getRegionParam(req);
  if (!validate(region)) {
    return create400();
  }

  const { regionCode } = lookup(region);
  try {
    const results = await eBirdRequest(regionCode);
    return create200(results);
  } catch (err) {
    console.warn('Error connecting to eBird API', err.message);
    return create500(err.message);
  }
};
