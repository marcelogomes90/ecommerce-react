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

import { headerStyle, menuStyle, logoStyle } from './Header.style';
import logo from '../../assets/logo.png';

const { Header } = Layout;

// eslint-disable-next-line react/prop-types
function AppHeader({ currentMenu, onMenuItemClick }) {
  return (
    <Header style={headerStyle}>
      <Image preview={false} src={logo} alt="Logo" style={logoStyle} />
      <Space>
        <Menu
          style={menuStyle}
          mode="horizontal"
          onClick={onMenuItemClick}
          selectedKeys={[currentMenu]}
        >
          <Menu.Item key="home">Início</Menu.Item>
          <Menu.Item key="about">Sobre</Menu.Item>
          <Menu.Item key="catalog">Catálogo</Menu.Item>
          <Menu.Item key="contact">Contato</Menu.Item>
        </Menu>
        <Button type="primary" icon={<LoginOutlined />}>
          Login
        </Button>
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
