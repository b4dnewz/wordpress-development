const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Webpack common configurations
exports.compiler = {
  target: 'web',
  entry: `./src/index.js`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, `src/theme/assets`)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      }, {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      }, {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [new ExtractTextPlugin('bundle.css')]
}
