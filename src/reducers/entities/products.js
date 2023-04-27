import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import fetchProducts from '../../services/products';

export const productsEntitiesAdapter = createEntityAdapter();

const initialState = productsEntitiesAdapter.getInitialState();

const productsEntitiesSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productsEntitiesAdapter.setMany(state, action.payload);
      });
  },
  initialState,
  name: 'products',
});

export const {
  selectById: getProductsById,
} = productsEntitiesAdapter.getSelectors((state) => state.entities?.products);

export default productsEntitiesSlice.reducer;
