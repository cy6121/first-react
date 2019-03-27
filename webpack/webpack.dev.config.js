/**
 * Created by rain on 2018/1/1.
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

webpackConfig.entry.index.unshift('react-hot-loader/patch');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'), // 默认会以根文件夹提供本地服务器，这里指定文件夹
    inline: true, // 自动刷新
    hot: true, // 开启热模块替换
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 9090, // 如果省略，默认8080
    publicPath: '/',
    compress: true, // 使用gzip压缩
    stats: 'minimal',
  },
});
