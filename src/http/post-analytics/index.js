// Thanks to Wes for an example of this idea https://github.com/wesbos/hit-counter
const arc = require('@architect/functions');
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
const validateUrl = (urlString) => {
  const defaultBase = 'https://www.snowyowls.ca';

  try {
    const { pathname, search } = new URL(urlString, defaultBase);

    if (!/\/(map|data|about)?/.test(pathname)) {
      return null;
    }

    if (search.length && !/\?region=[a-zA-Z-]{2,5}/.test(search)) {
      return null;
    }

    return `${pathname}${search}`;
  } catch (err) {
    console.warn(`Unable to validate URL '${urlString}'`, err.message);
    return null;
  }
};

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
  const urlString = arc.http.helpers.bodyParser(req);
  const url = validateUrl(urlString);

  if (!url) {
    return { statusCode: 400 };
  }

  await initialize(url);
  await count(url);

  return { statusCode: 201 };
};
