'use strict';

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const path = require('path');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
const publicUrl = '';
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Style file regex
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

// This is the development configuration.
module.exports = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  devtool: 'cheap-module-source-map',
  // These are the "entry points" to our application.
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: publicPath
  },
  externals: {
    "paho-mqtt": "Paho"
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  },

  module: {
    rules: [
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              require.resolve('@babel/preset-env'),
              {
                useBuiltIns: 'usage',
                corejs: 3
              }
            ],
            [
              require.resolve('@babel/preset-react'),
              {
                development: true,
                useBuiltIns: true
              }
            ]
          ]
        }
      },
      // Process CSS files
      {
        test: cssRegex,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      // Process SASS files
      {
        test: sassRegex,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      // "url" loader embeds assets smaller than specified size as data URLs to avoid requests.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
          esModule: false
        }
      },
      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto'
      },
      // Handle raw data files
      {
        test: /data\\sample\.js$/,
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // Makes some environment variables available in index.html.
    new InterpolateHtmlPlugin(env.raw),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    // Makes some environment variables available to the JS code
    new webpack.DefinePlugin(env.stringified),
    // This is necessary to emit hot updates
    new webpack.HotModuleReplacementPlugin(),
    // Watcher doesn't work well if you mistype casing in a path
    new CaseSensitivePathsPlugin(),
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it.
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  ],
  // Some libraries import Node modules but don't use them in the browser.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  }
};
