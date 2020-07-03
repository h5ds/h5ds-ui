import './collapse.less';
import React, { useState } from 'react';
import { Switch } from 'antd';
import classNames from 'classnames';

function Collapse({ title, children, checked, visible, onChange, contentStyle, size = 'normal' }) {
  let defaultShow = '';
  let type = '';
  if (visible === undefined) {
    defaultShow = checked;
    type = 'checked';
  } else {
    defaultShow = visible;
    type = 'visible';
  }
  const [show, setShow] = useState(defaultShow);
  const changeCheck = e => {
    setShow(e);
    if (onChange) {
      onChange(e);
    }
  };
  const clickTitle = () => {
    if (type === 'visible') {
      changeCheck(!show);
    }
  };
  return (
    <div className={classNames('ui-collapse', `ui-collapse-title-${size}`)}>
      {title ? (
        <div className={classNames('ui-collapse-title', `ui-collapse-title-${size}`)}>
          <span
            style={{
              cursor: type === 'visible' ? 'pointer' : 'default'
            }}
            onClick={clickTitle}
            className="ui-collapse-title-span"
          >
            {title}
          </span>
          {type === 'checked' ? (
            <Switch size={size} onChange={changeCheck} checked={show} />
          ) : (
            <a
              onClick={() => changeCheck(!show)}
              className={classNames('h5font', 'ui-collapse-icon', {
                'ico-zhankai': !show,
                'ico-zhankai1': show
              })}
            ></a>
          )}
        </div>
      ) : null}
      {show && children ? (
        <div className="ui-collapse-content" style={contentStyle}>
          <div className="ui-collapse-inner">{children}</div>
        </div>
      ) : null}
    </div>
  );
}
export default Collapse;
