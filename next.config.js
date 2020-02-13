const withCSS = require("@zeit/next-css");
const { parsed: localEnv } = require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");

const cssConfig = { cssModules: true };
const nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

module.exports = withPlugins([[withCSS, cssConfig]], nextConfig);
