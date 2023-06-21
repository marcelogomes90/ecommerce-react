import { Button, Form, Input, Space, Typography } from 'antd';
import React from 'react';
import { form, formButton, loginContainer } from './Login.style';

const { Text, Title, Link } = Typography;

function Login() {
  return (
    <Space direction="vertical" style={loginContainer}>
      <Title level={2}>Entre ou Cadastre-se</Title>
      <Form
        name="login-form"
        layout="vertical"
        style={form}
      >

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor, insira seu e-mail!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Senha"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor, insira sua senha!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        
        <Button
          type="primary"
          htmlType="submit"
          style={formButton}
          block
        >
          Login
        </Button>
      </Form>

      <Text>Ainda não é cadastrado? <Link>Cadastre-se aqui</Link></Text>
    </Space>
  );
}

export default Login;
