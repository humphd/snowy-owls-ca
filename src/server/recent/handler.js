const { lookup, validate } = require('../../shared/region');
const SnowyOwl = require('./snowy-owl');

const getRegionParam = (region) => region || 'CA';

const createJsonResponse = (statusCode, body, cacheControl) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    ...(cacheControl ? { 'Cache-Control': cacheControl } : {}),
  },
  body: JSON.stringify(body),
});

module.exports.handleRecentRequest = async ({ region, apiKey, fetchImpl }) => {
  const requestedRegion = getRegionParam(region);

  if (!validate(requestedRegion)) {
    return createJsonResponse(400, 'invalid region: must be a valid Canadian region code');
  }

  if (!apiKey) {
    return createJsonResponse(500, 'Missing eBird API key');
  }

  try {
    const owl = new SnowyOwl({ apiKey, fetchImpl });
    const results = await owl.recentObservations(lookup(requestedRegion));
    return createJsonResponse(200, results);
  } catch (err) {
    console.warn(err);
    return createJsonResponse(500, err.message);
  }
};
