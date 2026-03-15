const { handleRecentRequest } = require('./handler');

exports.handler = async function recent(req) {
  return handleRecentRequest({
    region: req.queryStringParameters && req.queryStringParameters.region,
    apiKey: process.env.API_KEY,
  });
};
