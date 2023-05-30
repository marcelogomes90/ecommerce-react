/* eslint-disable react/prop-types */
import {
  Button,
  Divider,
  Image,
  Input,
  Radio,
  Space,
  Typography,
} from 'antd';

import {
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { Rating } from 'react-simple-star-rating';
import React from 'react';

const { Text, Title } = Typography;

function Product({ loading, product }) {
  return (
    <div>
      {loading ? null : (
        <Space align="center" size={[100]} style={{ marginTop: 50, marginBottom: 50, justifyContent: 'center', width: '100%' }}>
          <Image
            width={400}
            height={460}
            src={product?.image}
          />
          <Space direction="vertical" style={{ width: 600 }}>
            <Space direction="vertical">
              <Title style={{ marginBottom: 12 }}>{product?.title}</Title>
              <Space align="start" style={{ marginBottom: 10 }}>
                <Rating
                  allowFraction
                  readonly
                  initialValue={product?.rating.rate}
                  size={20}
                />
                <Text strong style={{ fontSize: 14 }}>{`(${product?.rating.count})`}</Text>
              </Space>
              <Text>{product?.description}</Text>
              <Text strong>Tamanho:</Text>
              <Radio.Group defaultValue="p" buttonStyle="solid">
                <Radio.Button value="a">P</Radio.Button>
                <Radio.Button value="b">M</Radio.Button>
                <Radio.Button value="c">G</Radio.Button>
              </Radio.Group>
              <Text strong style={{ fontSize: 24 }}>
                {`R$ ${product?.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
              </Text>
              <Space style={{ marginTop: 6 }}>
                <Button shape="circle" size="small">-</Button>
                <Input defaultValue={1} maxLength={2} type="number" style={{ width: 80 }} />
                <Button shape="circle" size="small">+</Button>
              </Space>
              <Space style={{ marginTop: 12 }}>
                <Button size="large" type="primary">Comprar agora</Button>
                <Button icon={<ShoppingCartOutlined />} size="large">Adicionar ao carrinho</Button>
              </Space>
            </Space>
          </Space>
        </Space>
      )}
    </div>
  );
}

export default Product;
