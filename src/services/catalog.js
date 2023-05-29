import { createAsyncThunk } from '@reduxjs/toolkit';
import fakeStore from '../app/api';

const fetchCatalog = createAsyncThunk('catalog/fetch', async () => {
  const { data } = await fakeStore.get('/products');

  return data;
});

export default fetchCatalog;
