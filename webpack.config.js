const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env', 'react', 'stage-0' ],
          },
        },
      },
      {
        test: /\.(s)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ],
        }),
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({ filename: 'index_bundle.css' }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    // new CopyWebpackPlugin([ { from: 'src/images/weather-icons', to: 'images' } ]),
  ],
};
