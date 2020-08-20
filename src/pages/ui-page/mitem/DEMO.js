import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { Mitem } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  return (
    <UILayout code={code} apis={apis} info="标题带色块的item">
      <div className="item">
        <Mitem title="标题" extra={<i className="h5font ico-huantu" />}>
          box的内容
        </Mitem>
      </div>
    </UILayout>
  );
}
