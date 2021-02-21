/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
const { override, useBabelRc } = require("customize-cra");
const fs = require("fs");

const dotenvFiles = [".env", ".env.local"];

let extendedEnv = {};

dotenvFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    let { parsed } = require("dotenv").config({
      path: file,
    });

    Object.entries(parsed).forEach(([key, value]) => {
      extendedEnv[key] = JSON.stringify(value);
    });
  }
});

const findWebpackPlugin = (plugins, pluginName) =>
  plugins.find((plugin) => plugin.constructor.name === pluginName);

const overrideProcessEnv = (value) => (config) => {
  const plugin = findWebpackPlugin(config.plugins, "DefinePlugin");
  const processEnv = plugin.definitions["process.env"] || {};

  plugin.definitions["process.env"] = {
    ...processEnv,
    ...value,
  };

  return config;
};

module.exports = {
  webpack: override(useBabelRc(), overrideProcessEnv(extendedEnv)),
};
