const merge = require('webpakc-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    open: true,
    port: 8080,
    hot: true,
    compress: true,
  }
});