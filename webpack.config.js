var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dir_js, 'main.js'),
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: '/node_modules',
      loader: 'babel-loader',
      test: dir_js,
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: dir_html }
    ]),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: dir_build,
  },
};
