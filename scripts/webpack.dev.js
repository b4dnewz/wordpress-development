// Core dependencies
const path = require('path');
const webpack = require('webpack');

// Require common webpack configuration
const compiler = require('../webpack.config.js').compiler;

// Set source map for development mode
compiler.devtool = 'eval-source-map';

// Set proxy configurations to access WordPress
const proxyConfig = {
  target: "http://localhost:8080",
  ignorePath: false,
  changeOrigin: true,
  secure: false
};

// Ensure context is set to root folder
compiler.context = path.join( __dirname, '../' );

// Development server configuration
compiler.devServer = {
  publicPath: `/wp-content/themes/theme/assets`,
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig
  },
  open: true,
  port: 3000
};

// Add environment variable for conditional requires
compiler.plugins.push(
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
    DEBUG: true
  })
);

// Export new webpack settings
module.exports = compiler;
