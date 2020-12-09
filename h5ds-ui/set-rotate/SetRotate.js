import './set-rotate.less';
import React, { useState } from 'react';
import { InputNumber } from 'antd';
import offset from 'document-offset';
import angleBetweenPoints from 'angle-between-points';

export default function SetRotate({ value = 0, onChange, changeEnd, noInput }) {
  const [val, setVal] = useState(value);

  const doMousedown = e => {
    const radius = 18; // 圆形半径
    const { left, top } = offset(e.target);
    let angle = angleBetweenPoints(
      {
        x: left + radius,
        y: top + radius
      },
      { x: e.pageX, y: e.pageY }
    );
    setVal(~~angle);
    //
    const onMouseMove = em => {
      angle = angleBetweenPoints(
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
      if (changeEnd) {
        changeEnd(~~angle);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const numberChange = angle => {
    setVal(~~angle);
    if (changeEnd) {
      changeEnd(~~angle);
    }
    if (onChange) {
      onChange(~~angle);
    }
  };

  return (
    <div className="ui-set-rotate">
      <div onMouseDown={doMousedown} className="ui-set-rotate-cricle">
        <span className="ui-set-rotate-center"></span>
        <span className="ui-set-rotate-line" style={{ transform: `rotate(${val + 90}deg)` }}></span>
      </div>
      {!noInput && (
        <>
          <InputNumber min={0} max={360} value={val} onChange={numberChange} style={{ marginLeft: 10, width: 52 }} />
          &nbsp;
          <span>度</span>
        </>
      )}
    </div>
  );
}
