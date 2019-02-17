const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entry = path.join(__dirname, `../src/index.js`);
const output = path.join(__dirname, `../src/theme/assets`);

// Webpack common configurations
exports.compiler = {
  mode: 'development',
  target: 'web',
  entry: entry,
  output: {
    filename: 'bundle.js',
    path: output
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.(sa|sc|c)ss$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }, {
      test: /\.(png|jpg|gif)$/,
      use: ['file-loader']
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "bundle.css",
  })]
}
