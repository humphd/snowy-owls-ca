const test = require('tape');
const { toDate } = require('../../src/http/get-recent/date');

test('eBird Date with no time', (t) => {
  t.plan(2);
  t.equal(toDate('2020-11-14').getTime(), new Date(2020, 10, 14).getTime());
  t.equal(toDate('2020-01-01').getTime(), new Date(2020, 0, 1).getTime());
});

test('eBird Date with time', (t) => {
  t.plan(2);
  t.equal(toDate('2020-11-14 15:00').getTime(), new Date(2020, 10, 14, 15, 0).getTime());
  t.equal(toDate('2020-01-01 01:59').getTime(), new Date(2020, 0, 1, 1, 59).getTime());
});

test('eBird Date of unknown format', (t) => {
  t.plan(1);
  const date = toDate('');
  t.ok(typeof date.getTime === 'function');
});
