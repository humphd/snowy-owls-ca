const test = require('tape');
const { handleRecentRequest } = require('../../src/http/get-recent/handler');

test('get /recent with invalid region', async (t) => {
  t.plan(1);
  const result = await handleRecentRequest({
    region: 'invalid',
    apiKey: 'test-key',
  });
  t.equal(result.statusCode, 400, 'got 400');
});
