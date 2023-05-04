import React, { useCallback, useEffect } from 'react';
import { Card } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../services/products';
import { getProductsListState } from './Catalog.state';
import Catalog from './Catalog';
import { getProductsList } from '../../reducers/entities/products';
import { cardStyle, iconStyle, imageStyle } from './Catalog.style';

const { Meta } = Card;

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
        <HeartOutlined style={iconStyle} key="fav" />,
        <ShoppingCartOutlined style={iconStyle} key="cart" />,
      ]}
    >
      <Meta
        title={product.title}
        description={`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
      />
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
