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
        loaders: [{
            test: /\.js$/,
            exclude: /(bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};
