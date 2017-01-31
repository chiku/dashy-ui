var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',

  output: {
    path: __dirname,
    filename: 'out/public/app.js',
    publicPath: '/public/'
  },

  stats: {
    colors: true,
    reasons: true
  },

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ]
};
