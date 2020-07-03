import React from 'react';
import './item.less';
import classNames from 'classnames';

export default function MBMItem({ title, children, className }) {
  return (
    <div className={classNames('uimb-modal-item', className)}>
      {title && <div className="uimb-modal-item-title">{title}</div>}
      <div className="uimb-modal-item-children">{children}</div>
    </div>
  );
}
