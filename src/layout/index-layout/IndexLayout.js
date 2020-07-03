import './index-layout.less';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import CommonHeader from '../../components/common/CommonHeader';
import CommonSider from '../../components/common/CommonSider';

const { Content } = Layout;

export default class IndexLayout extends Component {
  render() {
    const { match, routes = [], location } = this.props;
    const parentPath = match.path;
    return (
      <Layout>
        <CommonHeader />
        <Layout>
          <CommonSider />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {location.pathname.split('/').map((d, i) => {
                if (d === '') {
                  return <Breadcrumb.Item key={i}>Home</Breadcrumb.Item>;
                } else {
                  return <Breadcrumb.Item key={i}>{d}</Breadcrumb.Item>;
                }
              })}
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 780
              }}
            >
              <Switch>
                {routes.map(route => {
                  const routeKey = parentPath + route.path;
                  return (
                    <Route
                      key={routeKey}
                      path={routeKey}
                      render={props => <route.component {...props} routes={route.routes || []} />}
                    />
                  );
                })}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
