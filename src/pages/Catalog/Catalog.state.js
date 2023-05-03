/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import fetchProducts from '../../services/products';
import { productsEntitiesAdapter } from '../../reducers/entities/products';

const INITIAL_STATE = productsEntitiesAdapter.getInitialState({
  loading: null,
});

const invoicesListSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(isAnyOf(
        fetchProducts.fulfilled,
        fetchProducts.rejected,
      ), (state) => {
        state.loading = null;
      });
  },
  initialState: INITIAL_STATE,
  name: 'productsList',
  reducers: {},
});

export const getProductsListState = (state) => state.productsList;

export default invoicesListSlice.reducer;
