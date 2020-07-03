import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { Tags } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

// data = [], onChange, value
export default function Example() {
  const onChange = v => {
    console.log(v);
  };

  return (
    <UILayout code={code} apis={apis} info="标签组">
      <Tags
        data={[
          { key: 1, value: 1, name: '标签1' },
          { key: 2, value: 2, name: '标签2' },
          { key: 3, value: 3, name: '标签3' },
          { key: 4, value: 4, name: '标签4' },
          { key: 5, value: 5, name: '标签5' }
        ]}
        onChange={onChange}
        value={1}
      />
    </UILayout>
  );
}
