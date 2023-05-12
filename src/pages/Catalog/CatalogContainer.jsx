import React, { useCallback, useEffect } from 'react';
import {
  Card,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import { Rating } from 'react-simple-star-rating';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../services/products';
import { getProductsListState } from './Catalog.state';
import Catalog from './Catalog';
import { getProductsList } from '../../reducers/entities/products';
import {
  cardStyle,
  cardTextContainerStyle,
  iconStyle,
  imageStyle,
} from './Catalog.style';

const { Text } = Typography;

function CatalogContainer() {
  const dispatch = useDispatch();
  const productsList = useSelector(getProductsList);
  const { loading } = useSelector(getProductsListState);

  const createProductCard = useCallback((product) => (
    <Card
      loading={loading}
      hoverable
      style={cardStyle}
      cover={(
        <img
          style={imageStyle}
          alt={product.title}
          title={product.title}
          src={product.image}
        />
      )}
      actions={[
        <Tooltip title="Adicionar aos favoritos">
          <HeartOutlined style={iconStyle} key="fav" />
        </Tooltip>,
        <Tooltip title="Adicionar ao carrinho">
          <ShoppingCartOutlined style={iconStyle} key="cart" />
        </Tooltip>,
      ]}
    >
      <div direction="vertical" style={cardTextContainerStyle}>
        <Text style={{ fontSize: 16 }} ellipsis>
          {product.title}
        </Text>
        <Text strong style={{ fontSize: 18 }}>
          {`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
        </Text>
        <Space align="start">
          <Rating
            allowFraction
            readonly
            initialValue={product.rating.rate}
            size={20}
          />
          <Text strong style={{ fontSize: 14 }}>{`(${product.rating.count})`}</Text>
        </Space>
      </div>
    </Card>
  ), [productsList]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Catalog
      createProductCard={createProductCard}
      loading={loading}
      productsList={productsList}
    />
  );
}

export default CatalogContainer;
