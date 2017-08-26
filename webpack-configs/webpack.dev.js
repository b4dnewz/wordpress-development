// Core dependencies
const path = require('path');

// Require common webpack configuration
const compiler = require('../webpack.config.js').compiler;
const THEME_NAME = require('../webpack.config.js').THEME_NAME;

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
  contentBase: `./wordpress/wp-content/themes/${THEME_NAME}/assets`,
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig
  },
  open: true
};

// Export new webpack settings
module.exports = compiler;
