const merge = require('webpack-merge');
const path = require('path');

const common = require('./common.config.js');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 5001,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  mode: 'development'
});
