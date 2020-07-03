import React from 'react';
import { Timeline } from 'antd';
import './logs.less';

export default function Logs() {
  return (
    <div className="logs">
      <Timeline>
        <Timeline.Item>【2020-07-01】发布v1.0.0版本</Timeline.Item>
        <Timeline.Item>【2020-06-01】UI库开始</Timeline.Item>
      </Timeline>
    </div>
  );
}
