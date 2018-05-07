var path = require('path');
var neat = require('node-neat');
var bourbon = require('node-bourbon');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var srcRoot = path.join(__dirname, '.');

var bourbonPaths = bourbon.includePaths;
var neatPaths = neat.includePaths;

var sassLoaderPaths = neat.with(path.join(srcRoot, './src/stylesheets')).map(function(item) {
  return '&includePaths[]=' + item;
});

sassLoaderPaths += bourbon.with([]).map(function(item) {
  return '&includePaths[]=' + item;
});

module.exports = {
  entry: path.join(srcRoot, './src/app.js'),
  devtool: 'inline-source-map',
  output: {
    path: path.join(srcRoot, './dist'),
    filename: './bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/ , 
        exclude: /(node_modules|bower_components)/,
        loader:'babel-loader'
      },
      {
        test: /\.css$/, 
        exclude: [/node_modules/],
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: {sourceMap: true} },
            {
              loader: 'postcss-loader',
              options: {         
                plugins: (loader) => [autoprefixer()]
              }
            },
            { loader: 'fast-sass-loader?sourceMap=true' + sassLoaderPaths }
          ]
        })
      },
    ]
  },
  resolve: {
    extensions: ['.js','.jsx','.scss'],
    modules: [path.join(__dirname, './node_modules')]
  },
  resolveLoader: { 
    modules: [path.join(__dirname, './node_modules')]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};
