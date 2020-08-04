import './common-sider.less';
import React from 'react';
import { Menu, Layout } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { routes } from '../../pages/ui-page/index';

const { Sider } = Layout;

const { SubMenu } = Menu;
export default function CommonSider() {
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu mode="inline" selectedKeys={[location.pathname]} openKeys={['sub1']} style={{ height: '100%' }}>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="UI组件库">
          {routes.map(d => {
            return (
              <Menu.Item key={'/' + d.path}>
                <Link to={'/' + d.path}>{d.name}</Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      </Menu>
    </Sider>
  );
}
