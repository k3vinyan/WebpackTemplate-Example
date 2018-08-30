const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: ['react']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 15000
            }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|bmp|svg)$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'none'
};

module.exports = config;
