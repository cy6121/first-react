/**
 * Created by rain on 2017/12/17.
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 指定入口文件，程序从这里开始编译,__dirname当前目录, ../表示上一级目录, ./同级目录
  entry: {
    index: ['./src/index.js'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'), // 输出的路径
    filename: 'js/[name].[hash:8].js', // 打包后文件
    chunkFilename: 'js/[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader', // 加载器
        exclude: /node_modules/,
      },
      {
        test: /\.(css|pcss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'image/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      favicon: path.resolve(__dirname, '../src/asset/images/favicon.ico'),
    }),
  ],
};
