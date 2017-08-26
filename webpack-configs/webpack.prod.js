// Core dependencies
const path = require('path');
const webpack = require('webpack');

// Webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Require common webpack configuration
const compiler = require('../webpack.config.js').compiler;
const THEME_NAME = require('../webpack.config.js').THEME_NAME

// Set the production source map type
compiler.devtool = 'source-map';

// Uglify scripts for production use
compiler.plugins.unshift(new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  sourceMap: false,
  output: {
    comments: false
  }
}));

// Clean entire output directory to ensure no old files remains
compiler.plugins.unshift(new CleanWebpackPlugin([
  path.join(__dirname, `../wordpress/wp-content/themes/${THEME_NAME}/*`)
], {
  root: path.join(__dirname, '../'),
  verbose: true
}));

// Export new webpack settings
module.exports = compiler;
