export const code = `
import React from 'react';
import { Mitem } from '../../../../h5ds-ui';

export default function Example() {
  return (
    <div className="item">
      <Mitem title="标题" extra={<i className="h5font ico-huantu" />}>
        box的内容
      </Mitem>
    </div>
  );
}

`;
