const { host, port, resolve, theme } = require('./config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  entry: [
    'webpack-dev-server/client?http://' + host + ':' + port, //  为webpack-dev-server的环境打包好运行代码
    'webpack/hot/only-dev-server', // 为热替换（HMR）打包好运行代码,//  only- 意味着只有成功更新运行代码才会执行热替换（HMR）
    resolve('../src/index.js')
  ],
  // externals: ['React', 'ReactDOM', 'ReactRouter', 'ReactRouterDOM', 'mobx', '_', 'antd', 'PubSub', 'moment'],
  output: {
    publicPath: '/',
    path: resolve('../dist'),
    filename: `assets/js/[name].js`
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          resolve('../src'),
          resolve('../h5ds-ui')
          // resolve('../node_modules')
        ],
        use: ['babel-loader']
      },
      {
        test: /\.(css|less)$/,
        include: [resolve('../src'), resolve('../h5ds-ui'), resolve('../node_modules')],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: false } },
          { loader: 'postcss-loader', options: { sourceMap: false } },
          { loader: 'less-loader', options: { sourceMap: false, javascriptEnabled: true, modifyVars: theme } }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: resolve('../src/index.html'),
      filename: 'index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host,
    port,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true, // using html5 router.
    contentBase: resolve('../dist')
  }
});
