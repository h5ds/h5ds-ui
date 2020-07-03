import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { code } from './code';
// import { apis } from './apis';

export default function Example() {
  return (
    <UILayout code={code} info="工具库">
      import {'{'} util {'}'} from 'h5ds-ui'; <br />
      <br />
      // 获取随机ID <br />
      util.randomID();
    </UILayout>
  );
}
