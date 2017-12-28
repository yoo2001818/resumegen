const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  context: __dirname,
  entry: [
    './src/client',
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js',
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new WebpackIsomorphicToolsPlugin(
      require('./webpack-isomorphic-tools.config')),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|tiff)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff2?|eot|svg|ttf)?$/,
        use: ['file-loader'],
      },
    ],
  },
};
