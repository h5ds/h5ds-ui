import React from 'react';
import UILayout from '../../../layout/ui-layout';
import { SourceTags } from '../../../../h5ds-ui';
import { code } from './code';
import { apis } from './apis';

/**
 * ajaxGet
 * ajaxUpdate
 * ajaxDelete
 * ajaxAdd
 * onChange
 * scope: system
 * type: image
 */
export default function Example() {
  // 获取标签
  const ajaxGet = async params => {
    console.log(params);
    return {
      code: 0,
      message: '成功',
      data: [
        { categoryName: '标签1', id: '1' },
        { categoryName: '标签2', id: '2' },
        { categoryName: '标签3', id: '3' },
        { categoryName: '标签4', id: '4' }
      ]
    };
  };

  // 更新标签
  const ajaxUpdate = async params => {
    console.log('更新标签', params);
    return {
      code: 0,
      message: '成功',
      data: ''
    };
  };

  // 添加标签
  const ajaxAdd = async params => {
    console.log('添加标签', params);
    return {
      code: 0,
      message: '成功',
      data: ''
    };
  };

  // 删除标签
  const ajaxDelete = async params => {
    console.log('删除标签', params);
    return {
      code: 0,
      message: '成功',
      data: ''
    };
  };

  // 切换标签
  const onChange = d => {
    console.log(d);
  };

  return (
    <UILayout code={code} apis={apis} info="资源列表">
      <h3>系统资源标签</h3>
      <SourceTags scope="system" type="image" ajaxGet={ajaxGet} onChange={onChange} />
      <h3>用户资源标签</h3>
      <SourceTags
        scope="user"
        type="image"
        ajaxGet={ajaxGet}
        ajaxDelete={ajaxDelete}
        ajaxUpdate={ajaxUpdate}
        ajaxAdd={ajaxAdd}
        onChange={onChange}
      />
    </UILayout>
  );
}
