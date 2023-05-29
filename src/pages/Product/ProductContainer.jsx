import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import findProduct from '../../services/product';
import { getProductState } from './Product.state';

function ProductContainer() {
  const id = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector(getProductState);

  useEffect(() => {
    dispatch(findProduct(id));
  }, []);

  return (
    <Product
      loading={loading}
      product={product}
    />
  );
}

export default ProductContainer;
