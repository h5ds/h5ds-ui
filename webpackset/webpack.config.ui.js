const { resolve, theme } = require('./config');
// webpack 配置文档
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const pluginConf = {
  mode: 'production',
  // mode: 'development',
  entry: {
    dist: resolve('../h5ds-ui/index.js') // 插件入口
  },
  output: {
    publicPath: '/',
    path: resolve('../dist-h5ds-ui'),
    filename: `[name]/index.js`,
    libraryTarget: 'umd'
  },
  // 注意：如果不是通过 import {} from 'antd' 引入而是通过 import xxx from 'antd/libs/xxx' 引入的方式，不会被抽离
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    mobx: 'mobx',
    PubSub: 'PubSub',
    lodash: '_',
    antd: 'antd',
    moment: 'moment'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.esm', '.css', '.less'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve('../h5ds-ui'), resolve('../node_modules')],
        use: ['babel-loader']
      },
      {
        test: /\.(css|less)$/,
        include: [resolve('../node_modules'), resolve('../h5ds-ui')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          `less-loader?{javascriptEnabled: true, modifyVars: ${JSON.stringify(theme)}}`
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: false, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            warnings: false, // 去除warning警告
            // drop_debugger: true,// 发布时去除debugger语句
            // drop_console: true, // 发布时去除console语句
            pure_funcs: ['console.log'] // 配置发布时，不被打包的函数
          }
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]/style.css`
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('../package_ui.json'),
        to: resolve('../dist-h5ds-ui/package.json'),
        toType: 'file'
      },
      {
        from: resolve('../README.md'),
        to: resolve('../dist-h5ds-ui/README.md'),
        toType: 'file'
      }
    ]),
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [__dirname.replace('webpackset', 'umd')]
    })
  ]
};

module.exports = webpackMerge(baseConfig, pluginConf);
