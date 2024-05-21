// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
// const { generateWebpackConfig } = require('shakapacker')

// const webpackConfig = generateWebpackConfig()

// module.exports = webpackConfig

// config/webpack/webpack.config.js
const { generateWebpackConfig, merge } = require('shakapacker')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const webpackConfig = generateWebpackConfig()

module.exports = merge(
  webpackConfig, {
    plugins: [new ForkTsCheckerWebpackPlugin()]
  }
);