import React from 'react';
import './source-layout.less';
import classNames from 'classnames';

export default function SourceLayout({ title, children, className }) {
  return (
    <div className={classNames('ui-source-layout', className)}>
      <div className="ui-source-layout-title">{title}</div>
      <div className="ui-source-layout-content">{children}</div>
    </div>
  );
}
