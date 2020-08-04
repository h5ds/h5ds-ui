import React, { useState } from 'react';
import UILayout from '../../../layout/ui-layout';
import { CanEditCollapse, Item, util } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';
import { Button } from 'antd';

/**
  title,
  align = 'center',
  children,
  titleWidth = 60,
  info,
  extra,
  block,
  className,
  size = 'normal'
 */
export default function Example() {
  const [data, setData] = useState([
    { id: 1, name: '标题1', content: '内容' },
    { id: 2, name: '标题2', content: '内容' }
  ]);

  const update = () => {
    console.log('执行updateCanvas等方法');
  };

  const addItem = () => {
    data.push({ id: util.randomID(), name: '标题' + util.randomID(), content: '内容' });
    setData([...data]);
  };

  return (
    <UILayout code={code} apis={apis} info="可编辑的Item">
      <h3>
        可编辑的Item{' '}
        <Button onClick={addItem} size="small">
          新增
        </Button>
      </h3>
      <div className="item">
        <CanEditCollapse
          data={data}
          update={update}
          render={d => {
            return (
              <Item title="设置内容" size="small">
                {d.content}
              </Item>
            );
          }}
        />
      </div>
    </UILayout>
  );
}
