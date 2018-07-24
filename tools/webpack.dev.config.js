const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.config');

const webpackDev = webpackMerge(webpackBase, {
  devtool: 'eval',
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ],
});

module.exports = webpackDev;
