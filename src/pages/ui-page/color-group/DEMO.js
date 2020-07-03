import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { ColorGroup } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  const [color, setColor] = useState('rgba(0,0,0,1)');
  return (
    <UILayout code={code} apis={apis} info="颜色组件，会缓存5个用过的颜色">
      <h3>正常模式</h3>
      <div>
        <ColorGroup value={color} onChange={setColor} />
      </div>
      <br />
      <h3>缩小模式</h3>
      <div>
        <ColorGroup clear={true} size="small" value={color} onChange={setColor} />
      </div>
    </UILayout>
  );
}
