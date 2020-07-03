import './slidergroup.less';

import React, { useState } from 'react';

import { InputNumber, Slider } from 'antd';

function SliderGroup({ width = 120, step = 0.1, min = 0, max = 1, value = 0, onChange, onAfterChange }) {
  const [val, setVal] = useState(value);
  const doChange = v => {
    if (isNaN(v)) {
      return;
    }
    setVal(v);
    if (onChange) {
      onChange(v);
    }
  };

  const doOnAfterChange = v => {
    if (isNaN(v)) {
      return;
    }
    setVal(v);
    if (onAfterChange) {
      onAfterChange(v);
    }
  };

  return (
    <div className="ui-slider-group">
      <div className="ui-slider-group-inner">
        <Slider
          className="ui-slider"
          style={{ width }}
          step={step}
          min={min}
          onAfterChange={doOnAfterChange}
          tipFormatter={null}
          max={max}
          onChange={doChange}
          value={typeof val === 'number' ? val : 0}
        />
        <InputNumber
          step={step}
          min={min}
          max={max}
          style={{ marginLeft: 10, width: 52 }}
          value={val}
          onChange={doChange}
        />
      </div>
    </div>
  );
}

export default SliderGroup;
