import { createProxyMiddleware } from '../node_modules/http-proxy-middleware/dist/index';

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true,
        })
    );
};
