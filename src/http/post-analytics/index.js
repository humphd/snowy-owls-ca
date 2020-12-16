const data = require('@begin/data');

const table = 'analytics';

/**
 * Valid URLs look like:
 *
 * /
 * /?region=CA
 * /map
 * /map?region=CA-ON
 * etc
 *
 * For /, /map, /data, or /about
 */
const validateUrl = (url) => /^\/(map|data|about)?(\?region=[a-zA-Z-]{2,5})?$/.test(url);

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

  if (!validateUrl(body)) {
    return { statusCode: 400 };
  }

  await initialize(body);
  await count(body);

  return { statusCode: 201 };
};
