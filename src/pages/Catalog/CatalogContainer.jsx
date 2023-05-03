import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../services/products';
import { getProductsListState } from './Catalog.state';
import Catalog from './Catalog';
import { getProductsList } from '../../reducers/entities/products';

function CatalogContainer() {
  const dispatch = useDispatch();
  const productsList = useSelector(getProductsList);
  const { loading } = useSelector(getProductsListState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Catalog productsList={productsList} loading={loading} />
  );
}

export default CatalogContainer;
