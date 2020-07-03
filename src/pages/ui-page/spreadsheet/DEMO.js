import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { SpreadSheet } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

export default function Example() {
  // 组件销毁的时候触发，建议配合Modal使用
  const onDestroy = data => {
    console.log(data);
  };

  // 数据变化触发
  const onSeek = data => {
    console.log(data);
  };

  return (
    <UILayout code={code} apis={apis} info="表格数据编辑器">
      <div className="item">
        <SpreadSheet
          type="table"
          showToolbar={true}
          onDestroy={onDestroy}
          onSeek={onSeek}
          data={[
            [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
            [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
            [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
            [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
          ]}
        />
      </div>
    </UILayout>
  );
}
