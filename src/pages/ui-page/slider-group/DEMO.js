import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { SliderGroup } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

// width = 120, step = 0.1, min = 0, max = 1, value = 0, onChange, onAfterChange
export default function Example() {
  const onAfterChange = v => {
    console.log('变化后触发', v);
  };

  const onChange = v => {
    console.log('变化时', v);
  };

  return (
    <UILayout code={code} apis={apis} info="滑动条和输入框的组合">
      <SliderGroup width={200} onChange={onChange} onAfterChange={onAfterChange} />
    </UILayout>
  );
}
