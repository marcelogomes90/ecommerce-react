/* eslint-disable react/prop-types */
import { Space, Typography } from 'antd';
import React from 'react';
import { containerStyle } from './Catalog.style';

const { Title } = Typography;

function Catalog({ createProductCard, productsList }) {
  return (
    <Space direction="vertical" style={containerStyle}>
      <Title level={3}>Moda Masculina</Title>
      <Space size="large">
        {productsList?.filter((list) => list.category === 'men\'s clothing').map(createProductCard)}
      </Space>
      <Title level={3}>Moda Feminina</Title>
      <Space size="large">
        { productsList?.filter((list) => list.category === 'women\'s clothing').map(createProductCard)}
      </Space>
      <Title level={3}>Jóias</Title>
      <Space size="large">
        { productsList?.filter((list) => list.category === 'jewelery').map(createProductCard)}
      </Space>
      <Title level={3}>Eletrônicos</Title>
      <Space size="large">
        { productsList?.filter((list) => list.category === 'electronics').map(createProductCard)}
      </Space>
    </Space>
  );
}

export default Catalog;
