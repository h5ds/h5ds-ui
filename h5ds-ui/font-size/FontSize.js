import React from 'react';
import { Select } from 'antd';
import { fontData } from './data';

const Option = Select.Option;

function FontSize({ value, onChange, width = 120 }) {
  return (
    <Select size="small" className="ui-select" defaultValue={parseInt(value, 10)} style={{ width }} onChange={onChange}>
      {fontData.map(d => {
        return (
          <Option value={d} key={d}>
            {d}px
          </Option>
        );
      })}
    </Select>
  );
}

export default FontSize;
