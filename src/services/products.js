import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeStore from '../app/api';

const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const { data } = await fakeStore.get('/products');

  return data;
});

export default fetchProducts;
