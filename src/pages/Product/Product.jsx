/* eslint-disable react/prop-types */
import {
  Button,
  Image,
  Radio,
  Space,
  Typography,
} from 'antd';

import {
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { Rating } from 'react-simple-star-rating';
import React from 'react';
import {
  buttonsContainer,
  containerStyle,
  infosContainer,
  inputContainer,
  priceStyle,
  ratingContainer,
  ratingStyle,
  StyledInputNumber,
  titleStyle,
} from './Product.style';

const { Text, Title } = Typography;

function Product({ loading, product }) {
  return (
    loading ? null : (
      <Space align="center" size={[100]} style={containerStyle}>
        <Image
          width={300}
          height={420}
          src={product?.image}
          style={{ objectFit: 'contain' }}
        />
        <Space direction="vertical" style={infosContainer}>
          <Title level={3} style={titleStyle}>{product?.title}</Title>
          <Space align="start" style={ratingContainer}>
            <Rating
              allowFraction
              readonly
              initialValue={product?.rating.rate}
              size={20}
            />
            <Text strong style={ratingStyle}>{`(${product?.rating.count})`}</Text>
          </Space>
          <Text>{product?.description}</Text>
          <Text strong style={priceStyle}>
            {`R$ ${product?.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          </Text>
          <Space style={inputContainer}>
            <Button shape="circle" size="small">-</Button>
            <StyledInputNumber defaultValue={1} maxLength={2} type="number" />
            <Button shape="circle" size="small">+</Button>
          </Space>
          <Space style={buttonsContainer}>
            <Button size="large" type="primary">Comprar agora</Button>
            <Button icon={<ShoppingCartOutlined />} size="large">Adicionar ao carrinho</Button>
          </Space>
        </Space>
      </Space>
    )
  );
}

export default Product;
