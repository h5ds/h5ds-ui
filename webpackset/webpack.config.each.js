const fs = require('fs');
const { resolve, theme, rootPath } = require('./config');
// webpack 配置文档
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

let plugins = fs.readdirSync(rootPath('./h5ds-ui'));
const pluginConf = {
  mode: 'production',
  entry: {},
  output: {
    publicPath: '/',
    path: resolve('../dist-h5ds-ui/dist'),
    filename: `[name]/index.js`,
    libraryTarget: 'umd'
  },
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
    'mobx-react': 'MobxReact',
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
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            warnings: false, // 去除warning警告
            pure_funcs: ['console.log'] // 配置发布时，不被打包的函数
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common/layer',
          priority: 10,
          test: /react/,
          minSize: 0, // 默认小于30kb不会打包
          chunks: 'all',
          minChunks: 999999 // 只需要单独打包react
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve('../h5ds-ui')],
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]/style.css`
    }),
    new CaseSensitivePathsPlugin()
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: [__dirname.replace('webpackset', 'dist-plugins/plugins')]
    // })
  ]
};
plugins.forEach(name => {
  if (!['index.js', 'mobile.js', 'less'].includes(name)) {
    console.log('build:umdui', name);
    pluginConf.entry[`${name}`] = resolve(`../h5ds-ui/${name}/index.js`);
  }
});

module.exports = webpackMerge(baseConfig, pluginConf);
