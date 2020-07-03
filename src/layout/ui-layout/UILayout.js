import React from 'react';
import './ui-layout.less';
import { Table } from 'antd';
import { CodeMirror } from '../../../h5ds-ui';

export default function UILayout({ children, code, apis, info }) {
  return (
    <div className="ui-layout">
      <div className="ui-layout-title">组件说明</div>
      <div className="ui-layout-content">{info}</div>
      <div className="ui-layout-title">组件示例</div>
      <div className="ui-layout-content">{children}</div>
      <div className="ui-layout-title">案例代码</div>
      <div className="ui-layout-content">
        {code && (
          <CodeMirror
            value={code}
            options={{
              tabSize: 4,
              mode: { name: 'javascript', json: true },
              theme: 'xq-light', // monokai
              styleActiveLine: true,
              lineNumbers: true,
              line: true,
              lineWrapping: true
            }}
          />
        )}
      </div>
      <div className="ui-layout-title">API文档</div>
      <div className="ui-layout-content">
        <Table
          bordered={true}
          pagination={false}
          dataSource={apis}
          columns={[
            {
              title: '参数',
              dataIndex: 'params',
              key: 'params',
              render(d) {
                return <span className="ui-layout-params">{d}</span>;
              }
            },
            {
              title: '说明',
              dataIndex: 'tips',
              key: 'tips'
            },
            {
              title: '类型',
              dataIndex: 'type',
              key: 'type',
              render(d) {
                return <span className="ui-layout-type">{d}</span>;
              }
            },
            {
              title: '默认值',
              dataIndex: 'default',
              key: 'default'
            }
          ]}
        />
      </div>
    </div>
  );
}
