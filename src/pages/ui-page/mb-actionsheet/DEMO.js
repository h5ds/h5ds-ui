import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { MBActionSheet } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';
import { Button } from 'antd';

/**
container,
className,
zIndex = 1000,
height = 400,
width = '90%',
visible,
onClose,
title,
children,
downClose,
noMargin
 */
export default function Example() {
  const [visible, setVisible] = useState(false);

  return (
    <UILayout code={code} apis={apis} info="超简单的弹窗，手机端用的">
      <>
        <Button onClick={() => setVisible(true)}>显示弹窗</Button>&nbsp;&nbsp;
        <MBActionSheet title="标题" visible={visible} onCancel={() => setVisible(false)}>
          <div style={{ height: 400 }}>固定的Modal内容</div>
        </MBActionSheet>
      </>
    </UILayout>
  );
}
