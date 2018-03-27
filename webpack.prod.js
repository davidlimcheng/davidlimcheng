const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  output: {
    publicPath: 'http://127.0.0.1:5000/'
  }
});
