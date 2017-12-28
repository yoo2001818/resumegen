const path = require('path');
const webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    './src/client',
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: './assets/',
    filename: 'bundle.js',
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new WebpackIsomorphicToolsPlugin(
      require('./webpack-isomorphic-tools.config')),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
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
