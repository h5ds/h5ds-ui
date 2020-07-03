import React, { useState } from 'react';
import './tags.less';
import classNames from 'classnames';

/**
 * data: { key:'', value, name }
 * @param {*} data
 */
export default function Tags({ data = [], onChange, value }) {
  const [val, setVal] = useState(value);

  const clickTag = d => {
    setVal(d.value);
    if (onChange) {
      onChange(d);
    }
  };

  return (
    <div className="ui-tags">
      {data.map(d => {
        return (
          <span
            onClick={() => clickTag(d)}
            key={d.key}
            className={classNames('ui-tags-item', {
              'ui-tags-active': val === d.value
            })}
          >
            {d.name}
          </span>
        );
      })}
    </div>
  );
}
