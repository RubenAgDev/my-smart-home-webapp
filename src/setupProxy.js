const { createProxyMiddleware } = require('http-proxy-middleware');

const NOTION_BASE_URL = 'https://api.getnotion.com';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: NOTION_BASE_URL,
      changeOrigin: true,
    })
  );
};
