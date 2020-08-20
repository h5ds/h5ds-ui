import './mitem.less';
import React from 'react';
import classNames from 'classnames';

function Mitem({ title, children, className, extra }) {
  return (
    <div className={classNames('ui-mitem', className)}>
      {title ? (
        <div className="ui-mitem-title">
          {title}
          {extra && <div className="ui-mitem-title-extra">{extra}</div>}
        </div>
      ) : null}
      <div className="ui-mitem-content">{children}</div>
    </div>
  );
}

export default Mitem;
