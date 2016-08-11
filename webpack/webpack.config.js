// // npm install -g webpack
// // npm install --save-dev webpack
// // npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-preset-stage-1
// // npm install --save-dev css-loader style-loader sass-loader resolve-url-loader extract-text-webpack-plugin
// // npm install --save-dev react react-dom bootstrap-sass

// webpack = require('webpack');
// path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');


// webpackConfig = {
//     context: __dirname,
//     entry: {
//         bundle: './static/app.js',
//         styles: './static/main.scss'
//     },
//     output: {
//         filename: '[name].js',
//         path: './static/build',
//         library: '[name]'
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     devtool: '#cheap-module-source-map',
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: [/node_modules/],
//                 loader: "babel-loader",
//                 query: {
//                     presets: ['es2015', 'react', 'stage-0', 'stage-1']
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
//             },
//             {
//                 test: /\.css$/,
//                 loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//             },
//             {
//                 test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
//                 loader: 'file-loader'
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin('styles.css', {
//             allChunks: true
//         })
//     ]
// };
// module.exports = webpackConfig;

'use strict';

//const NODE_ENV = process.env.NODE_ENV ||"development";


module.exports = {
    entry: "./home",
    output : {        
        filename:"build.js",
        library:"home"
    },
    watch : true,
    watchOptions : {
        aggregateTimeout: 500
    },
    devtool : '#cheap-module-source-map' ,
    loaders: [
    {
        test: /\.js?$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        query: {
            presets: ['es2015', 'react', 'stage-0', 'stage-1']
        }
    }
    ]
}