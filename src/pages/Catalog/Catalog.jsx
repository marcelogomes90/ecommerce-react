import { Card, Space, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;
const { Meta } = Card;

function Catalog({ productsList, loading }) {
  return (
    <Space direction="vertical">
      <Title level={2}>Moda Masculina</Title>
      <Title level={2}>Moda Feminina</Title>
      <Title level={2}>Jóias</Title>
      <Title level={2}>Eletrônicos</Title>
      <Space style={{ marginBottom: 200 }}>
        <Card
          hoverable
          style={{ padding: 50, width: 260, height: 420 }}
          cover={<img alt="example" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />}
        >
          <Meta style={{ padding: 0 }} title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ padding: 50, width: 260, height: 420 }}
          cover={<img alt="example" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />}
        >
          <Meta style={{ padding: 0 }} title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ padding: 50, width: 260, height: 420 }}
          cover={<img alt="example" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />}
        >
          <Meta style={{ padding: 0 }} title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ padding: 50, width: 260, height: 420 }}
          cover={<img alt="example" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />}
        >
          <Meta style={{ padding: 0 }} title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Space>
    </Space>
  );
}

export default Catalog;
