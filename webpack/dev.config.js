const merge = require('webpack-merge');
const path = require('path');

const common = require('./common.config.js');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  mode: 'development'
});
