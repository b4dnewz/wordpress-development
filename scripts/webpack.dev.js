const path = require('path');
const webpack = require('webpack');
const compiler = require('./webpack.base').compiler;

// Set proxy configurations to access WordPress
const proxyConfig = {
  target: "http://localhost:8080",
  ignorePath: false,
  changeOrigin: true,
  secure: false
};

// Ensure context is set to root folder
compiler.context = path.join(__dirname, '../');

// Set source map for development mode
compiler.devtool = 'eval-source-map';

// Development server configuration
compiler.devServer = {
  publicPath: `/wp-content/themes/theme/assets`,
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig
  },
  port: 3000
};

// Add environment variable for conditional requires
compiler.plugins.push(new webpack.EnvironmentPlugin({NODE_ENV: 'development', DEBUG: true}));

// Export new webpack settings
module.exports = compiler;
