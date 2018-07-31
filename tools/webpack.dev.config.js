const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.config');

Object.keys(webpackBase.entry).forEach((key) => {
  webpackBase.entry[key] = [].concat(webpackBase.entry[key]).concat('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
});

const webpackDev = webpackMerge(webpackBase, {
  devtool: 'eval',
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = webpackDev;
