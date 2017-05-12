const webpack = require('webpack') //to access built-in plugins
const path = require('path')

const config = {
  entry: [path.join(__dirname, '/client.js')],
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.jsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ]
}

module.exports = config
