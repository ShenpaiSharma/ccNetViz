var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'main.js', //ccNetViz.js
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    rules: [
      // Babel Loader
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // GLSL Loader
      {
        test: /\.glsl$/,
        use: { loader: 'raw-loader' },
      },
    ],
  },
};
