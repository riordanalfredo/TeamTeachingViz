/**
 * This file is used to configure a proxy used for development.
 *
 * @Note: This file is not being imported anywhere. It just configures a proxy that rewrites
 * requests to our REST api (i.e. /api/*) by removing the '/api' prefix.
 *
 * @see: https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
 * @see: https://github.com/chimurai/http-proxy-middleware
 */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  const targetAddress = `${process.env.REACT_APP_EXPRESS_IP}:${process.env.REACT_APP_EXPRESS_PORT}`;
  app.use(
    "/api",
    createProxyMiddleware({
      target: targetAddress,
      changeOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    })
  );
  app.use(
    "/pyserver",
    createProxyMiddleware({
      target: `${process.env.REACT_APP_PYSERVER_IP}:${process.env.REACT_APP_PYSERVER_PORT}`,
      changeOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    })
  );
};
