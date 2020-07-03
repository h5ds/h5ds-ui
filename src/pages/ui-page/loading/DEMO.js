import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { Loading } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';
import { Button } from 'antd';

export default function Example() {
  const [visible, setvisible] = useState(false);

  const show = () => {
    setvisible(true);
    setTimeout(() => {
      setvisible(false);
    }, 2000);
  };

  return (
    <UILayout code={code} apis={apis} info="全屏的loading">
      <Loading visible={visible} tips="loading..." />
      <Button onClick={show}>显示loading</Button>
    </UILayout>
  );
}
