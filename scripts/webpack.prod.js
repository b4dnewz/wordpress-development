const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const compiler = require('./webpack.base').compiler;

// Set the production source map type
compiler.devtool = 'source-map';

// Uglify scripts for production use
compiler.plugins.push(new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  sourceMap: false,
  output: {
    comments: false
  }
}));

compiler.plugins.push(new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../src/theme'),
    to: path.resolve(__dirname, '../dist')
  }
]));

// Export new webpack settings
module.exports = compiler;
