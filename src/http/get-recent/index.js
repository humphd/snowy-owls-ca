exports.handler = async function recent() {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf8',
    },
    body: JSON.stringify('hello world'),
  };
};
