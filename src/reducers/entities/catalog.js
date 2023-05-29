import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import fetchCatalog from '../../services/catalog';

export const catalogEntitiesAdapter = createEntityAdapter();

const initialState = catalogEntitiesAdapter.getInitialState();

const catalogEntitiesSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        catalogEntitiesAdapter.setMany(state, action.payload);
      });
  },
  initialState,
  name: 'catalog',
});

export const {
  selectAll: getCatalogList,
} = catalogEntitiesAdapter.getSelectors((state) => state.entities?.catalog);

export default catalogEntitiesSlice.reducer;
