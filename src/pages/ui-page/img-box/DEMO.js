import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { ImgBox } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  const onChange = (type, cropData, src, scale) => {
    console.log({ type, cropData, src, scale });
  };

  return (
    <UILayout code={code} apis={apis} info="图片盒子包括了删除、裁剪、还原、换图等功能">
      <div className="item">
        <ImgBox src="https://cdn.h5ds.com/static/images/logo3.png" onChange={onChange} />
      </div>
    </UILayout>
  );
}
