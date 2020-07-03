import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { Item } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

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
  return (
    <UILayout code={code} apis={apis} info="排版块组件">
      <h3>默认组件</h3>
      <div className="item">
        <Item title="标题名字">内容</Item>
      </div>
      <h3>align={`"center"`}</h3>
      <div className="item">
        <Item title="标题名字" align="center">
          内容
        </Item>
      </div>
      <h3>info={`"提示信息"`}</h3>
      <div className="item">
        <Item title="标题名字" info="提示信息" titleWidth={80}>
          内容
        </Item>
      </div>
      <h3>title={`""`}</h3>
      <div className="item">
        <Item>内容</Item>
      </div>
      <h3>
        extra={`<i className="h5font ico-zan"/>`} | block={`true`}
      </h3>
      <div className="item">
        <Item block={true} extra={<i className="h5font ico-zan" />} title="标题">
          内容
        </Item>
      </div>
      <h3>size={`"small"`}</h3>
      <div className="item">
        <Item size="small" title="标题">
          内容
        </Item>
      </div>
    </UILayout>
  );
}
