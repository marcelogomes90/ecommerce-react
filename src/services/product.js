import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeStore from '../app/api';

const findProduct = createAsyncThunk('find/product', async ({ id }) => {
  const { data } = await fakeStore.get(`/products/${id}`);

  return data;
});

export default findProduct;
