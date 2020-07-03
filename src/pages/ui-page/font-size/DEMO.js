import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { FontSize } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  const [size, setSize] = useState(12);
  return (
    <UILayout code={code} apis={apis} info="字体大小下拉框">
      <FontSize width={120} value={size} onChange={setSize} />
    </UILayout>
  );
}
