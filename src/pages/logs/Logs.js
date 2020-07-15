import React from 'react';
import { Timeline } from 'antd';
import './logs.less';

export default function Logs() {
  return (
    <div className="logs">
      <Timeline>
        <Timeline.Item>
          <p>【2020-07-15】发布v1.0.5版本</p>
          <p>SourceTags新增ajaxGetEnd方法</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-07-15】发布v1.0.4版本</p>
          <p>修复SourceTags分页参数问题</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-07-04】发布v1.0.3版本</p>
          <p>修复Item宽度的BUG</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-07-04】发布v1.0.2版本</p>
          <p>加入LoadSource插件。异步加载资源js,css,image</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-07-03】发布v1.0.1版本</p>
          <p>删除emitter插件</p>
        </Timeline.Item>
        <Timeline.Item>【2020-07-01】发布v1.0.0版本</Timeline.Item>
        <Timeline.Item>【2020-06-01】UI库开始</Timeline.Item>
      </Timeline>
    </div>
  );
}
