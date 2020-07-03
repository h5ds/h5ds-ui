import './set-rotate.less';
import React, { useState } from 'react';
import { InputNumber } from 'antd';
import offset from 'document-offset';
import angleBetweenPoints from 'angle-between-points';

export default function SetRotate({ value = 0, onChange, changeEnd }) {
  const [val, setVal] = useState(value);

  const doMousedown = e => {
    const radius = 18; // 圆形半径
    const { left, top } = offset(e.target);
    const angle = angleBetweenPoints(
      {
        x: left + radius,
        y: top + radius
      },
      { x: e.pageX, y: e.pageY }
    );
    setVal(~~angle);

    //
    const onMouseMove = em => {
      const angle = angleBetweenPoints(
        {
          x: left + radius,
          y: top + radius
        },
        { x: em.pageX, y: em.pageY }
      );
      setVal(~~angle);
      if (onChange) {
        onChange(~~angle);
      }
    };
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (changeEnd) {
        changeEnd(~~angle);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="ui-set-rotate">
      <div onMouseDown={doMousedown} className="ui-set-rotate-cricle">
        <span className="ui-set-rotate-center"></span>
        <span className="ui-set-rotate-line" style={{ transform: `rotate(${val + 90}deg)` }}></span>
      </div>
      <InputNumber min={0} max={360} value={val} onChange={setVal} style={{ marginLeft: 10, width: 52 }} />
      &nbsp;
      <span>度</span>
    </div>
  );
}
