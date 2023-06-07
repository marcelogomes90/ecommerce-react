import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import { Rating } from 'react-simple-star-rating';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import fetchCatalog from '../../services/catalog';
import { getCatalogListState } from './Catalog.state';
import Catalog from './Catalog';
import { getCatalogList } from '../../reducers/entities/catalog';
import {
  cardStyle,
  cardTextContainerStyle,
  iconStyle,
  imageStyle,
  priceStyle,
  ratingStyle,
  titleStyle,
} from './Catalog.style';

const { Text } = Typography;

function CatalogContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const catalogList = useSelector(getCatalogList);
  const { loading } = useSelector(getCatalogListState);

  const onCardClick = useCallback((product) => {
    navigate(`/catalog/${product.id}`);
  }, []);

  const createProductCard = useCallback((product) => (
    <Card
      key={product.id}
      loading={loading}
      hoverable
      onClick={() => onCardClick(product)}
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
        <Text style={titleStyle} ellipsis>
          {product.title}
        </Text>
        <Text strong style={priceStyle}>
          {`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
        </Text>
        <Space align="start">
          <Rating
            allowFraction
            readonly
            initialValue={product.rating.rate}
            size={20}
          />
          <Text strong style={ratingStyle}>{`(${product.rating.count})`}</Text>
        </Space>
      </div>
    </Card>
  ), [catalogList]);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  return (
    <Catalog
      createProductCard={createProductCard}
      loading={loading}
      productsList={catalogList}
    />
  );
}

export default CatalogContainer;
