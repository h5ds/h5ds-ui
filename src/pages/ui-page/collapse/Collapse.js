import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { Collapse } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

// title, children, checked, visible, onChange, contentStyle, size = 'normal'
export default function ExampleCollapse() {
  const onChange = v => {
    console.log('显示或隐藏面板', v);
  };

  return (
    <UILayout code={code} apis={apis} info="带开关的折叠面板">
      <h3>checked模式</h3>
      <div className="item">
        <Collapse onChange={onChange} title="标题">
          Collapse的内容
        </Collapse>
      </div>
      <h3>visible模式</h3>
      <div className="item">
        <Collapse title="标题" visible={true}>
          Collapse的内容
        </Collapse>
      </div>
      <h3>size='small'模式</h3>
      <div className="item">
        <Collapse size="small" title="标题" checked={true}>
          Collapse的内容
        </Collapse>
      </div>
    </UILayout>
  );
}
