/**
 * Created by rain on 2018/1/1.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      favicon: path.resolve(__dirname, '../src/asset/images/favicon.ico'),
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[contenthash:12].css',
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new TerserPlugin({
        cache: false,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }), // fix Cannot set property 'lastEffect' of null
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'commons',
          test: /\/(.*)\.js/,
          minChunks: 2,
          minSize: 0, // This is example is too small to create commons chunks
        },
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10,
          test: /node_modules\/(.*)\.js/,
        },
      },
    },
  },
});
