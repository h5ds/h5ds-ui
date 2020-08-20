import React from 'react';
import { Timeline } from 'antd';
import './logs.less';

export default function Logs() {
  return (
    <div className="logs">
      <Timeline>
        <Timeline.Item>
          <p>【2020-08-11】发布v1.0.12版本</p>
          <p>Mitem新增extra属性</p>
          <p>优化ImgList插件</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-08-06】发布v1.0.11版本</p>
          <p>修复UploadSource插件上传大小限制写死的BUG</p>
          <p>ImgBox插件新增setting按钮配置</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-08-04】发布v1.0.9版本</p>
          <p>ImgList插件新增修改按钮</p>
          <p>新增CanEditCollapse插件</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-07-22】发布v1.0.8版本</p>
          <p>CodeMirror新增光标插入代码功能</p>
          <p>MBModal插件调整和优化，新增MBModal.confirm方法</p>
          <p>新增MBActionSheet插件</p>
          <p>新增MBToast插件</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-07-18】发布v1.0.7版本</p>
          <p>SourceTags参数调整</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>【2020-07-15】发布v1.0.6版本</p>
          <p>SourceTags BUG修复</p>
        </Timeline.Item>
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
