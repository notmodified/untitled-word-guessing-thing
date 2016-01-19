const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const config = {
  entry: "./src/main.jsx",
  devtool: 'source-map',
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ["style", "css", "postcss", "sass"] },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  postcss: () => [autoprefixer]
};

module.exports = config;
