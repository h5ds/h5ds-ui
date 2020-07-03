import React from 'react';
import './error.less';

/**
 *
 * @param {*} type nolayer: 无图层, nopage: 无页面, 404, data: 数据异常, warn: 警告
 * theme: ''|'dark'
 */
export default function Errors({ info = null, type, theme = '' }) {
  if (theme === 'default') {
    theme = '';
  }
  return (
    <div className="ui-error">
      <div>
        <img src={`//cdn.h5ds.com/static/images/error_${type}${theme ? `_${theme}` : ''}.png`} alt="" />
        <p>{info}</p>
      </div>
    </div>
  );
}
