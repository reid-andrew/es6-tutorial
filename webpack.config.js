const path = require('path');

module.exports = {
  entry: {
      app: './js/main.js',
      ratefinder: './js/ratefinder.js'
  },
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/, // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "jshint-loader",
        // more options in the optional jshint object
        options: {  // ⬅ formally jshint property
          camelcase: true,
          emitErrors: false,
          failOnHint: false
        }
      }]
    }]
  },
};
