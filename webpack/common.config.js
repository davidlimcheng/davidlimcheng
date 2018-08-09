const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].[ext]' } }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg|bin)$/,
        use: [
          { loader: 'url-loader', options: { limit: 8 * 1024 } }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html')
    })
  ],
  node: {
    fs: 'empty'
  }
}
