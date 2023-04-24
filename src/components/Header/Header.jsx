import React from 'react';

import {
  HeartOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

import {
  Badge,
  Button,
  Image,
  Layout,
  Menu,
  Space,
  Tooltip,
} from 'antd';

import logo from '../../assets/logo1.png';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8e8e8',
        boxShadow: '0 2px 8px #f0f1f2',
      }}
    >
      <Image
        preview={false}
        src={logo}
        alt="Logo"
        style={{ width: '180px', marginRight: 'auto' }}
      />
      <Space>
        <Menu
          style={{ borderBottom: 'none', width: '320px' }}
          mode="horizontal"
          collapsedWidth={0}
        >
          <Menu.Item key="home">
            Início
          </Menu.Item>
          <Menu.Item key="about">
            Sobre
          </Menu.Item>
          <Menu.Item key="products">
            Produtos
          </Menu.Item>
          <Menu.Item key="contact">
            Contato
          </Menu.Item>
        </Menu>
        <Button type="primary" icon={<LoginOutlined />}>Login</Button>
        <Button icon={<UserAddOutlined />}>Registrar</Button>
        <Tooltip title="Favoritos">
          <Button icon={<HeartOutlined />} />
        </Tooltip>
        <Tooltip title="Carrinho">
          <Badge color="#777777" size="small" count={2}>
            <Button icon={<ShoppingCartOutlined />} />
          </Badge>
        </Tooltip>
      </Space>
    </Header>
  );
}

export default AppHeader;
