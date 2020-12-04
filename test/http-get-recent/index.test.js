const test = require('tape');
const tiny = require('tiny-json-http');
const sandbox = require('@architect/sandbox');

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

test('Shut down the Sandbox', async (t) => {
  t.plan(1);
  let result = await sandbox.end();
  t.equal(result, 'Sandbox successfully shut down');
});
