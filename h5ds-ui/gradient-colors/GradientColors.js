import './gradient-colors.less';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Popover } from 'antd';
import SetRotate from '../set-rotate';
import classNames from 'classnames';

// 'rgba(0,0,0,1)' type: hex || rgba
export default function GradientColors({ size = 'normal', data = [], onChange, className, noDelete, noAdd }) {
  const defaultColor = {
    type: 'linear',
    rotate: 0, // 渐变角度 0~360
    color: 'rgba(133, 255, 253, 1)',
    color2: 'rgba(26, 43, 160, 1)'
  };
  const [colorList, setColorList] = useState(data);
  const [active, setActive] = useState(0);
  // const [color, setColor] = useState({ ...defaultColor });

  const onVisibleChange = () => {
    const list = [...colorList, { ...defaultColor }];
    setColorList(list);
    if (onChange) {
      onChange(list);
    }
  };

  const onChangeColor = (c, i, type) => {
    // colorList[i] = `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`;
    if (type === 0) {
      colorList[i].color = `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`;
    }
    if (type === 1) {
      colorList[i].color2 = `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`;
    }
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

  const changeRotate = (val, i) => {
    colorList[i].rotate = val;
    const list = [...colorList];
    setColorList(list);
    if (onChange) {
      onChange(list);
    }
  };

  return (
    <div className={classNames('ui-colors-gradient', className)}>
      {colorList.map((d, i) => {
        return (
          <span key={i} className="ui-colors-item">
            <Popover
              destroyTooltipOnHide={true}
              overlayClassName="ui-color-popover ui-color-popover2"
              trigger="click"
              content={
                <div>
                  <ChromePicker onChange={c => onChangeColor(c, i, active)} color={active === 0 ? d.color : d.color2} />
                  <div className="ui-colors">
                    <span
                      onClick={() => setActive(0)}
                      className={classNames('ui-colors-iteminner', {
                        'ui-colors-iteminner-active': active === 0
                      })}
                      style={{ backgroundColor: d.color }}
                    />
                    <span
                      onClick={() => setActive(1)}
                      className={classNames('ui-colors-iteminner', {
                        'ui-colors-iteminner-active': active === 1
                      })}
                      style={{ backgroundColor: d.color2 }}
                    />
                  </div>
                  <div className="ui-rotate">
                    <span className="ui-rotate-name">渐变角度</span>
                    <SetRotate value={d.rotate} changeEnd={v => changeRotate(v, i)} />
                  </div>
                </div>
              }>
              <span
                className="ui-colors-iteminner"
                style={{
                  background: `-webkit-linear-gradient(-45deg, ${d.color} 0%, ${d.color2} 100%)`
                }}
              />
            </Popover>
            {!noDelete && <a onClick={e => deleteColor(e, i)} className="h5font ico-shanchu" title="删除"></a>}
          </span>
        );
      })}
      {!noAdd && (
        <span onClick={onVisibleChange} className="ui-colors-item ui-colors-item-add">
          +
        </span>
      )}
    </div>
  );
}
