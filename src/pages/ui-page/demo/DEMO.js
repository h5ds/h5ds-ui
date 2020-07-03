import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { Box } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  return (
    <UILayout code={code} apis={apis} info="可展开的插件">
      <div className="item">
        <Box title="标题" extra={<span>extra</span>}>
          box的内容
        </Box>
      </div>
    </UILayout>
  );
}
