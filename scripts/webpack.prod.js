const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const compiler = require('./webpack.base').compiler;

compiler.mode = 'production';

// Set the production source map type
compiler.devtool = 'source-map';

// Uglify scripts for production use
compiler.optimization = {
  minimizer: [new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true
  })]
};

// Copy whole theme, assets and built files into dist
compiler.plugins.push(new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../src/theme'),
    to: path.resolve(__dirname, '../dist')
  }
]));

// Export new webpack settings
module.exports = compiler;
