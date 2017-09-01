const path = require('path');
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const THEME_NAME = 'theme-name'
exports.THEME_NAME = THEME_NAME

// Webpack common configurations
exports.compiler = {

  entry: `./${THEME_NAME}/index.js`,

  output: {
    filename: 'bundle.js',
    path: path.join( __dirname, '/wordpress/wp-content/themes/' + THEME_NAME + '/assets' )
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
          }, {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      }, {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader?sourceMap=inline', 'sass-loader']
      }, {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: [

    new CopyWebpackPlugin([
      {
        context: path.join(__dirname, `/${THEME_NAME}/theme-files`),
        from: './**/*',
        to: '../.'

      }
    ], {
      ignore: ['./styles', './scripts', './index.js']
    })

  ]

}
