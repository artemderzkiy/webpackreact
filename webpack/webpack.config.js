var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
  entry: {
    bundle: './main.js',
  //  styles: './main.scss'
  },
  output: {
   path: __dirname,
    filename: 'bundle.js'
    },
     devtool: '#cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react' ]
        }
      },
      {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
             {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
    ]
  },
  plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ]
};
// var compiler = webpack(module.exports);
// compiler.run(function (err, stats) {
//   console.log(stats.toJson()); // по завершению, выводим всю статистику
// });