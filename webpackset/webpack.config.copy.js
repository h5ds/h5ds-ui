const { resolve } = require('./config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// webpack 配置文档
module.exports = {
  mode: 'production',
  entry: {
    invalid: resolve('./invalid.js')
  },
  output: {
    publicPath: '/',
    path: resolve('../invalid'),
    filename: `[name].js`
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('../dist-h5ds-ui'),
        to: resolve('../../H5DS6-WEB/node_modules/h5ds-ui'),
        toType: 'dir'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: resolve('../dist-h5ds-ui'),
        to: resolve('../../H5DS6.0/node_modules/h5ds-ui'),
        toType: 'dir'
      }
    ])
  ]
};
