const webpack = require('webpack');

// Require common webpack configuration
const compiler = require('../webpack.config.js').compiler;

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

// Export new webpack settings
module.exports = compiler;
