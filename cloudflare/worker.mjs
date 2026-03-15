import handlerModule from '../src/http/get-recent/handler.js';

const { handleRecentRequest } = handlerModule;

const jsonResponse = ({ body, headers, statusCode }) =>
  new Response(body, {
    status: statusCode,
    headers,
  });

const notFound = () => new Response('Not found', { status: 404 });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/recent' || url.pathname === '/recent/') {
      const response = await handleRecentRequest({
        region: url.searchParams.get('region'),
        apiKey: env.API_KEY,
        fetchImpl: fetch,
      });
      return jsonResponse(response);
    }

    // Chrome probes this in dev; avoid noisy errors if it isn't present in assets.
    if (url.pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
      return notFound();
    }

    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      return env.ASSETS.fetch(request);
    }

    return notFound();
  },
};
