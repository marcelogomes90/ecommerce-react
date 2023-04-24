import React from "react";

import {
  HeartOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { Badge, Button, Image, Layout, Menu, Space, Tooltip } from "antd";
import { headerStyle, menuStyle, logoStyle } from "./Header.style";

import logo from "../../assets/logo.png";

const { Header } = Layout;

function AppHeader() {
  return (
    <Header style={headerStyle}>
      <Image preview={false} src={logo} alt="Logo" style={logoStyle} />
      <Space>
        <Menu
          style={menuStyle}
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          collapsedWidth={0}
        >
          <Menu.Item key="home">Início</Menu.Item>
          <Menu.Item key="about">Sobre</Menu.Item>
          <Menu.Item key="products">Produtos</Menu.Item>
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
