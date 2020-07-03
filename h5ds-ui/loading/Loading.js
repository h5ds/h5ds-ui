import './loading.less';

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @desc 全屏的loading插件
 */
function Loading({ tips, children, visible, noBackground }) {
  return ReactDOM.createPortal(
    <div
      className="ui-loading-window"
      style={{
        backgroundColor: noBackground ? 'none' : 'rgba(0, 0, 0, 0.7)',
        display: visible ? 'block' : 'none'
      }}
    >
      {children ? (
        children
      ) : (
        <div className="ui-loading-center">
          <div className="ui-loadbox">{tips ? tips : 'loading...'}</div>
        </div>
      )}
    </div>,
    document.body
  );
}
export default Loading;
