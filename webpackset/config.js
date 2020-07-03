const path = require('path');
// const { getThemeVariables } = require('antd/dist/theme');
const resolve = url => path.resolve(__dirname, url);

module.exports = {
  theme: {},
  rootPath: (...args) => path.join(__dirname, '..', ...args),
  resolve,
  packSpecifiedPlugins: false, // ['h5ds-save-to-image'], // 如果是 ['name'] 就会单独打包指定的插件, 如果是 false，全部打包
  port: 7771,
  host: '127.0.0.1',
  version: '1.0.0'
};
