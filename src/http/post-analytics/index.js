const data = require('@begin/data');

const table = 'analytics';

const initialize = async (url) => {
  const query = {
    table,
    key: url,
    hits: 0,
  };
  const existing = await data.get(query);
  if (!existing) {
    await data.set(query);
  }
};

const count = (url) =>
  data.incr({
    table,
    key: url,
    prop: 'hits',
  });

exports.handler = async (req) => {
  const { body } = req;

  await initialize(body);
  await count(body);

  return {
    statusCode: 201,
  };
};