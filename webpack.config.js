const path = require("path");

/** @type {import('webpack').Configuration} */

module.exports = {
  experiments : {
    outputModule: true
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "char-animator.min.js",
    library: {
      type: 'module',
    },
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
