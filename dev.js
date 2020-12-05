const express = require('express');
const next = require('next');

const apiPort = parseInt(process.env.API_PORT, 10) || 3333;
const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const isDev = env !== 'production';

// Proxy API http://localhost:3333/recent -> http://localhost:3000/recent
const devProxy = {
  '/recent': {
    target: `http://localhost:${apiPort}/recent/`,
    pathRewrite: { '^/recent': '/' },
    changeOrigin: true,
  },
};

const app = next({
  dir: '.',
  dev: isDev,
});
const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    if (isDev && devProxy) {
      const { createProxyMiddleware } = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(function (context) {
        server.use(context, createProxyMiddleware(devProxy[context]));
      });
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
