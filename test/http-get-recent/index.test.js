const test = require('tape');
const tiny = require('tiny-json-http');
const sandbox = require('@architect/sandbox');
const nock = require('nock');

const url = 'http://localhost:6666/recent';

test('Set up env', (t) => {
  t.plan(1);
  t.ok(sandbox, 'Sandbox loaded');
});

test('Start the Sandbox', async (t) => {
  t.plan(1);
  let result = await sandbox.start();
  t.equal(result, 'Sandbox successfully started');
});

test('get /recent with invalid region', async (t) => {
  t.plan(1);
  try {
    let result = await tiny.get({ url: `${url}?region=invalid` });
    t.fail(`expected 400 but got ${result.statusCode}`);
  } catch (err) {
    t.equal(err.statusCode, 400, 'got 400');
  }
});

test('get /recent with no region', async (t) => {
  nock('https://ebird.org')
    .get(/\/ws2\.0\/.*/) // \/data\/obs\/[A-Z-]{2,5}\/recent\/snoowl1
    .reply(200, { test: true });

  t.plan(1);
  try {
    let result = await tiny.get({ url });
    /**
      {
      result: {
        body: { regionName: 'Canada', bounds: [Array], observations: [Array] },
        headers: {
          'content-type': 'application/json',
          date: 'Fri, 04 Dec 2020 14:24:06 GMT',
          connection: 'close',
          'content-length': '40087'
        }
      }
    }
     */
    console.log({ result });
    t.equal(result.body.test, true);
  } catch (err) {
    console.log({ err });
    t.fail(err);
  } finally {
    nock.cleanAll();
  }
});

test('Shut down the Sandbox', async (t) => {
  t.plan(1);
  let result = await sandbox.end();
  t.equal(result, 'Sandbox successfully shut down');
});
