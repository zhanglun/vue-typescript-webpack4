const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_PATH = path.resolve(__dirname, '../src');

module.exports = {
  entry: {
    app: path.resolve(SRC_PATH, 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'script/[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.(js|vue)$/,
        loader: 'babel-loader',
        query: {
          presets: 'env',
        },
        exclude: '/node_modules/',
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
     	{
        test: /\.ts|.tsx$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: () => {
          return [
            {
              loader: ['ts-loader'],
            },
          ];
        },
      },
    ]
  },
  resolve: {
    alias: {
      'vue': path.resolve('node_modules', 'vue/dist/vue.js'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, 'index.html'),
    }),
  ],
};
