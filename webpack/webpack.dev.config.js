/**
 * Created by rain on 2018/1/1.
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.js'),
  ], // 指定入口文件，程序从这里开始编译,__dirname当前目录, ../表示上一级目录, ./同级目录
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
