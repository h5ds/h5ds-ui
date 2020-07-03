const { resolve } = require('./config');

// webpack 配置文档
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.esm', '.css', '.less'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.(woff|eot|ttf|svg)$/,
        include: [resolve('../src'), resolve('../node_modules'), resolve('../h5ds-ui')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        // 图片加载处理
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        include: [resolve('../src'), resolve('../node_modules'), resolve('../h5ds-ui')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: 'assets/images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('欢迎使用H5DS，官网：www.h5ds.com'),
    new CaseSensitivePathsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve('../src/assets'),
        to: resolve('../dist/assets'),
        toType: 'dir'
      }
    ])
  ]
};
