require('dotenv').config()

const path = require('path');
const webpack = require('webpack');
const compiler = require('./webpack.base').compiler;

const hostname = (process.env.HOSTNAME !== '')
  ? `${process.env.HOSTNAME}`
  : 'localhost'
const port = (hostname === 'localhost')
  ? `${(process.env.PORT || 8080)}`
  : ''
const devPort = process.env.DEVPORT || 8088
const computedHostname = `${hostname}:${port}`

// Set proxy configurations to access WordPress
const proxyConfig = {
  target: `http://${computedHostname}`,
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
  port: devPort
};

// Add environment variable for conditional requires
compiler.plugins.push(new webpack.EnvironmentPlugin({
  NODE_ENV: 'development',
  DEBUG: true,
  HOSTNAME: computedHostname,
  DEVPORT: devPort
}));

// Export new webpack settings
module.exports = compiler;
