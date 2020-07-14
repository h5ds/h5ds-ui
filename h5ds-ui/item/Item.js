import React from 'react';
import './item.less';
import { Tooltip } from 'antd';
import classNames from 'classnames';

export default function Item({
  title,
  align = 'center',
  children,
  titleWidth = 60,
  info,
  noTitle,
  extra,
  block,
  fontSize = '12px',
  className,
  size = 'normal'
}) {
  if (!title) {
    noTitle = true;
  }

  return (
    <div
      className={classNames(
        'ui-item',
        {
          'ui-item-small': size === 'small',
          'ui-item-block': block
        },
        className
      )}
      style={{
        alignItems: align
      }}
    >
      {noTitle ? (
        <div className="ui-item-block-ctx">{children}</div>
      ) : (
        <>
          <div style={{ width: block ? '100%' : titleWidth }} className="ui-item-title">
            <span style={{ fontSize }} className={classNames({ 'ui-item-h': extra })}>
              {title}
            </span>
            {info ? (
              <Tooltip title={info}>
                <a className="h5font ico-yiwen ui-item-info" />
              </Tooltip>
            ) : null}
            {extra ? <span className="ui-item-extra">{extra}</span> : null}
          </div>
          <div className="ui-item-content" style={{ width: block ? '100%' : `calc(100% - ${titleWidth}px)` }}>
            {children}
          </div>
        </>
      )}
    </div>
  );
}
