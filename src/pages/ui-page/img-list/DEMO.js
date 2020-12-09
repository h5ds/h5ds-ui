import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { ImgList } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

// list, onChange, onDelete, clickImage
export default function Example() {
  const [list, setList] = useState([
    {
      id: 1,
      url: 'https://cdn.h5ds.com/static/images/logo3.png'
    },
    {
      id: 2,
      url: 'https://cdn.h5ds.com/static/images/logo3.png'
    }
  ]);

  const clickImage = d => {
    console.log('点击图片后执行', d);
  };

  const onDelete = val => {
    console.log('删除图片', val);
    setList([...list.filter(d => d.id !== val.id)]);
  };

  return (
    <UILayout code={code} apis={apis} info="多图片编辑">
      <ImgList addButton={true} list={list} onDelete={onDelete} clickImage={clickImage} />
    </UILayout>
  );
}
