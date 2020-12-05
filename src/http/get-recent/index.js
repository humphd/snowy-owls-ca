const { lookup, validate } = require('@architect/shared/region');
const SnowyOwl = require('./snowy-owl');

const eBirdRequest = (regionCode) => {
  const owl = new SnowyOwl();
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

const create500 = (message) => ({
  statusCode: 500,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(message),
});

const create400 = () => ({
  statusCode: 400,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify('invalid region: must be a valid Canadian region code'),
});

exports.handler = async function recent(req) {
  const region = getRegionParam(req);
  if (!validate(region)) {
    return create400();
  }

  try {
    const results = await eBirdRequest(lookup(region));
    return create200(results);
  } catch (err) {
    console.warn(err);
    return create500(err.message);
  }
};
