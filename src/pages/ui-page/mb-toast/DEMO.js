import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { MBToast } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';
import { Button, Divider } from 'antd';

/**
container,
className,
zIndex = 1000,
height = 400,
width = '90%',
visible,
onCancel,
title,
children,
downClose,
noMargin
 */
export default function Example() {
  const loading = () => {
    const hide = MBToast.loading('xxx');
    // setTimeout(() => {
    //   hide();
    // }, 2000000000);
  };

  const success = () => {
    const hide = MBToast.success();
    // setTimeout(() => {
    //   hide();
    // }, 2000);
  };

  const error = () => {
    const hide = MBToast.error();
    // setTimeout(() => {
    //   hide();
    // }, 2000);
  };

  return (
    <UILayout code={code} apis={apis} info="超简单的弹窗，手机端用的">
      <>
        <Button onClick={loading}>loading</Button>
        <Divider type="vertical" />
        <Button onClick={success}>success</Button>
        <Divider type="vertical" />
        <Button onClick={error}>error</Button>
      </>
    </UILayout>
  );
}
