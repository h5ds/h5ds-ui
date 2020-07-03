import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { SetRotate } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  const onChange = v => {
    console.log('change', v);
  };

  const changeEnd = v => {
    console.log('end', v);
  };

  return (
    <UILayout code={code} apis={apis} info="设置角度">
      <SetRotate value={0} onChange={onChange} changeEnd={changeEnd} />
    </UILayout>
  );
}
