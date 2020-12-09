import React, { useReducer } from 'react';
import { Collapse, Divider } from 'antd';
import './can-edit-collapse.less';

export default function CanEditCollapse({ data = [], tabKeyName = 'name', render, update }) {
  const { Panel } = Collapse;
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  // 往上移
  const prevItem = (index, e) => {
    e.stopPropagation();
    if (index === 0) {
      return;
    }
    // 交换 index, index-1 位置
    [data[index - 1], data[index]] = [data[index], data[index - 1]];
    forceUpdate();
    update('prev', index);
  };

  // 往下移
  const nextItem = (index, e) => {
    e.stopPropagation();
    if (index === data.length - 1) {
      return;
    }
    // 交换 index, index+1 位置
    [data[index], data[index + 1]] = [data[index + 1], data[index]];
    forceUpdate();
    update('next', index);
  };

  // 删除菜单
  const deleteItem = (index, e) => {
    e.stopPropagation();
    const arr = data.splice(index, 1);
    forceUpdate();
    update('delete', {
      index,
      value: arr
    });
  };

  return (
    <Collapse className="ui-canedit-collapse" accordion>
      {data.map((item, index) => {
        return (
          <Panel
            extra={
              <span>
                <i className="h5font ico-shanchu" onClick={e => deleteItem(index, e)} type="close" />
                <Divider type="vertical" />
                <i
                  className="h5font ico-up"
                  style={{ color: index ? '#505050' : '#e6e6e6' }}
                  onClick={e => prevItem(index, e)}
                />
                <Divider type="vertical" />
                <i
                  className="h5font ico-down"
                  style={{ color: index !== data.length - 1 ? '#505050' : '#e6e6e6' }}
                  onClick={e => nextItem(index, e)}
                />
              </span>
            }
            header={item[tabKeyName]}
            key={item.id}>
            {render && render(item)}
          </Panel>
        );
      })}
    </Collapse>
  );
}
