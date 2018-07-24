const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base.config');

module.exports = webpackMerge(webpackBase, {
  mode: 'production',
});
