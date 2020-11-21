const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    open: true,
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 5000
  },
  devtool: "source-map",
  plugins: [
    /* ... */
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
