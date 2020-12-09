import './colors.less';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Popover } from 'antd';
import classNames from 'classnames';

// 'rgba(0,0,0,1)' type: hex || rgba
export default function Colors({ size = 'normal', type = 'hex', data = [], onChange, className, noDelete, noAdd }) {
  const defaultColor = type === 'hex' ? '#000000' : 'rgba(0,0,0,1)';
  const [colorList, setColorList] = useState(data);
  const [color, setColor] = useState(defaultColor);

  const onVisibleChange = val => {
    if (!val) {
      const list = [...colorList, color];
      setColorList(list);
      if (onChange) {
        onChange(list);
      }
    }
  };

  const onChangeColor = (c, i) => {
    colorList[i] = type === 'hex' ? c.hex : `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`;
    const list = [...colorList];
    setColorList(list);
    if (onChange) {
      onChange(list);
    }
  };

  const deleteColor = (e, index) => {
    e.stopPropagation();
    const list = colorList.filter((d, i) => {
      return i !== index;
    });
    setColorList(list);
    if (onChange) {
      onChange(list);
    }
  };

  return (
    <div className={classNames('ui-colors', className)}>
      {colorList.map((d, i) => {
        return (
          <Popover
            key={i}
            destroyTooltipOnHide={true}
            overlayClassName="ui-color-popover"
            trigger="click"
            content={<ChromePicker onChange={c => onChangeColor(c, i)} color={d} />}>
            <span className="ui-colors-item">
              <span className="ui-colors-iteminner" style={{ backgroundColor: d, boxShadow: `0 5px 5px ${d}` }} />
              {!noDelete && <a onClick={e => deleteColor(e, i)} className="h5font ico-shanchu" title="删除"></a>}
            </span>
          </Popover>
        );
      })}
      {!noAdd && (
        <Popover
          overlayClassName="ui-color-popover"
          destroyTooltipOnHide={true}
          trigger="click"
          onVisibleChange={onVisibleChange}
          content={<ChromePicker onChange={c => setColor(c.hex)} color={color} />}>
          <span
            className="ui-colors-item"
            style={{ backgroundColor: 'rgba(0,0,0,1)', boxShadow: `0 5px 5px rgba(0,0,0,1)` }}>
            +
          </span>
        </Popover>
      )}
    </div>
  );
}
