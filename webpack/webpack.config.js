/**
 * Created by rain on 2017/12/17.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 指定入口文件，程序从这里开始编译,__dirname当前目录, ../表示上一级目录, ./同级目录
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
    vendor: ['react', 'react-dom', 'babel-polyfill'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // 输出的路径
    filename: 'app/[name]_[hash:8].js', // 打包后文件
    chunkFilename: 'app/chunks/[name].[chunkhash:5].chunk.js',
  },
  resolve: { // 配置模块如何解析
    modules: [ // 解析模块时搜索目录，从上而下查找
      path.resolve(__dirname, '../src'), // 优先搜索
      path.resolve(__dirname, '../node_modules'),
      'node_modules',
    ],
    extensions: ['.js', '.json', '.less'], // 自动解析确定的扩展
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
        test: /\.css$/,
        use: [
          { // 将打包的CSS文件通过STYLE标签的方式加入到HTML页面
            loader: 'style-loader',
          },
          { // 处理CSS文件
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img_[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.template.html'),
      inject: true,
      favicon: path.resolve(__dirname, '../favicon.ico'),
    }),
  ],
};
