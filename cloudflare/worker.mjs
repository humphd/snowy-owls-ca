import handlerModule from '../src/server/recent/handler.js';

const { handleRecentRequest } = handlerModule;
const CACHE_TTL_SECONDS = 300;

const jsonResponse = ({ body, headers, statusCode }) =>
  new Response(body, {
    status: statusCode,
    headers,
  });

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS' && (url.pathname === '/recent' || url.pathname === '/recent/')) {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (url.pathname === '/recent' || url.pathname === '/recent/') {
      const cacheKey = new Request(url.toString(), request);
      const cache = caches.default;
      const cached = await cache.match(cacheKey);

      if (cached) {
        return cached;
      }

      const response = await handleRecentRequest({
        region: url.searchParams.get('region'),
        apiKey: env.API_KEY,
        fetchImpl: fetch,
      });
      const httpResponse = jsonResponse(response);

      if (httpResponse.ok) {
        const headers = new Headers(httpResponse.headers);
        headers.set('Cache-Control', `public, max-age=${CACHE_TTL_SECONDS}`);
        const cacheableResponse = new Response(httpResponse.body, {
          status: httpResponse.status,
          headers,
        });
        ctx.waitUntil(cache.put(cacheKey, cacheableResponse.clone()));
        return cacheableResponse;
      }

      return httpResponse;
    }

    return new Response('Not found', { status: 404 });
  },
};
