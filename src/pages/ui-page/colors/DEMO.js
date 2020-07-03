import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { Colors } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

// data = [], onChange
export default function Example() {
  const [data, setData] = useState([
    '#3aa1ff',
    '#88d1ea',
    '#36cbcb',
    '#82dfbe',
    '#4ecb73',
    '#acdf82',
    '#fbd437',
    '#eaa674',
    '#f2637b',
    '#dc81d2',
    '#975fe5'
  ]);

  return (
    <UILayout code={code} apis={apis} info="多颜色编辑器">
      <Colors data={data} onChange={setData} />
    </UILayout>
  );
}
