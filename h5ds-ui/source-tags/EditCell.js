import React from 'react';
import { Popconfirm, Divider } from 'antd';

export default function EditCell({ canEdit, data, deleteTag, toSave, toEdit }) {
  return (
    <>
      <Popconfirm title="确定删除分类?" onConfirm={e => deleteTag(data, e)} okText="确定" cancelText="取消">
        <a>删除</a>
      </Popconfirm>
      <Divider type="vertical" />
      {canEdit === data.id ? <a onClick={() => toSave(data)}>保存</a> : <a onClick={() => toEdit(data)}>编辑</a>}
    </>
  );
}
