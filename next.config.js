const withCSS = require("@zeit/next-css");
const { parsed: localEnv } = require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");

let BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : process.env.PROD_URL;

const cssConfig = { cssModules: true };
const nextConfig = {
  publicRuntimeConfig: {
    base_url: BASE_URL,
    client_id: process.env.CLIENT_ID
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

module.exports = withPlugins([[withCSS, cssConfig]], nextConfig);
