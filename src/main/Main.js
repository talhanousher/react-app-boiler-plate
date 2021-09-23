import React, { useEffect, useState } from 'react';
import { Layout, Menu, Spin } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Switch, Route, Redirect, Link, useHistory } from "react-router-dom";

import { getItem } from "../services/local-storage";

import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';


const { Header, Sider, Content } = Layout;

export default function Auth() {

  const [user] = useState(JSON.parse(getItem('user')));
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace('/auth/login');
    }
  }, [user, history]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const renderLayout = () => {
    return <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/main/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/main/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/main/about">About</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
            <Link to="/main/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/main/dashboard" component={Dashboard} />
            <Route path="/main/home" component={Home} />
            <Route path="/main/about" component={About} />
            <Route path="/main/contact" component={Contact} />
            <Redirect to="/main" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  }
  const renderLoading = () => {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  }
  return (
    <div className="main-container">
      {
        user
          ? renderLayout()
          : renderLoading()
      }

    </div>
  );

}