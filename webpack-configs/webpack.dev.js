const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');

const compiler = require('../webpack.config.js').compiler;
const THEME_NAME = require('../webpack.config.js').THEME_NAME;

// Set source map for development mode
compiler.devtool = 'eval-source-map';

// Set proxy configurations to access WordPress
const proxyConfig = {
  "target": {
    "host": "localhost",
    "protocol": 'http:',
    "port": 8080
  },
  ignorePath: false,
  changeOrigin: true,
  secure: false
};

compiler.context = path.join(__dirname, '../');

// Add the dashboard GUI plugin
compiler.plugins.push(new DashboardPlugin());

// Development server configuration
compiler.devServer = {
  contentBase: `./wordpress/wp-content/themes/${THEME_NAME}/assets`,
  outputPath: path.join( __dirname, `../wordpress/wp-content/themes/${THEME_NAME}/assets` ),
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig
  }
};

// Export new webpack settings
module.exports = compiler;
