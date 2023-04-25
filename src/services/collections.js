import { createAsyncThunk } from '@reduxjs/toolkit';
import mockApiCollections from '../app/api';

const fetchCollections = createAsyncThunk('collections/fetch', async () => {
  const { data } = await mockApiCollections.get('');
  const dataObject = { ...data.data.collections.edges };

  return dataObject;
});

export default fetchCollections;
