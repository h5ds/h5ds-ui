import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { GradientColors } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

// data = [], onChange
export default function Example() {
  const [data, setData] = useState([
    {
      type: 'linear',
      rotate: 0,
      color: 'rgba(133, 255, 253, 1)',
      color2: 'rgba(26, 43, 160, 1)'
    }
  ]);

  console.log('>>>>', data);

  return (
    <UILayout code={code} apis={apis} info="多颜色编辑器">
      <GradientColors type="rgba" data={data} onChange={setData} />
    </UILayout>
  );
}
