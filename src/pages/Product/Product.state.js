/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import findProduct from '../../services/product';

const INITIAL_STATE = {
  product: null,
  loading: null,
};

const productSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(findProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(findProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addMatcher(isAnyOf(
        findProduct.fulfilled,
        findProduct.rejected,
      ), (state) => {
        state.loading = null;
      });
  },
  initialState: INITIAL_STATE,
  name: 'product',
  reducers: {},
});

export const getProductState = (state) => state.product;

export default productSlice.reducer;
