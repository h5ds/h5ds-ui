import './common-sider.less';
import React from 'react';
import { Menu, Layout } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const { SubMenu } = Menu;
export default function CommonSider() {
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" selectedKeys={[location.pathname]} openKeys={['sub1']} style={{ height: '100%' }}>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="UI组件库">
          <Menu.Item key="/ui/collapse">
            <Link to="/ui/collapse">Collapse 折叠面板</Link>
          </Menu.Item>
          <Menu.Item key="/ui/colorGroup">
            <Link to="/ui/colorGroup">ColorGroup 颜色库</Link>
          </Menu.Item>
          <Menu.Item key="/ui/colors">
            <Link to="/ui/colors">Colors 颜色组</Link>
          </Menu.Item>
          <Menu.Item key="/ui/error">
            <Link to="/ui/error">Error 错误模块</Link>
          </Menu.Item>
          <Menu.Item key="/ui/fontSize">
            <Link to="/ui/fontSize">FontSize 文字大小</Link>
          </Menu.Item>
          <Menu.Item key="/ui/imgBox">
            <Link to="/ui/imgBox">ImgBox 图片盒子</Link>
          </Menu.Item>
          <Menu.Item key="/ui/imgList">
            <Link to="/ui/imgList">ImgList 图表列表</Link>
          </Menu.Item>
          <Menu.Item key="/ui/item">
            <Link to="/ui/item">Item 模块</Link>
          </Menu.Item>
          <Menu.Item key="/ui/loading">
            <Link to="/ui/loading">Loading 加载</Link>
          </Menu.Item>
          <Menu.Item key="/ui/mitem">
            <Link to="/ui/mitem">Mitem 模块2</Link>
          </Menu.Item>
          <Menu.Item key="/ui/musicPlayer">
            <Link to="/ui/musicPlayer">MusicPlayer 音乐播放器</Link>
          </Menu.Item>
          <Menu.Item key="/ui/setRotate">
            <Link to="/ui/setRotate">SetRotate 旋转</Link>
          </Menu.Item>
          <Menu.Item key="/ui/sliderGroup">
            <Link to="/ui/sliderGroup">SliderGroup 滚动条</Link>
          </Menu.Item>
          <Menu.Item key="/ui/sourceTags">
            <Link to="/ui/sourceTags">SourceTags 资源库标签</Link>
          </Menu.Item>
          <Menu.Item key="/ui/spreadsheet">
            <Link to="/ui/spreadsheet">SpreadSheet 表格编辑</Link>
          </Menu.Item>
          <Menu.Item key="/ui/tags">
            <Link to="/ui/tags">Tags 标签组</Link>
          </Menu.Item>
          <Menu.Item key="/ui/uimbModal">
            <Link to="/ui/uimbModal">MBModal 手机弹窗</Link>
          </Menu.Item>
          <Menu.Item key="/ui/uploadSource">
            <Link to="/ui/uploadSource">UploadSource 资源上传</Link>
          </Menu.Item>
          <Menu.Item key="/ui/utils">
            <Link to="/ui/utils">utils 插件库</Link>
          </Menu.Item>
          <Menu.Item key="/ui/codeMirror">
            <Link to="/ui/codeMirror">CodeMirror 代码编辑</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
