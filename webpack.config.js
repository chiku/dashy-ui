// webpack.config.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2017. All rights reserved
// License::   MIT

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/main.js',
    './src/main.css',
  ],

  output: {
    path: path.join(__dirname, 'out', 'public'),
    filename: 'app.js',
    publicPath: '/',
  },

  stats: {
    colors: true,
    reasons: true,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize',
        }),
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: { comments: false },
    }),
    new ExtractTextPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      minify: { collapseWhitespace: true },
    }),
  ],
};
