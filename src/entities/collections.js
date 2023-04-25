import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import fetchCollections from '../services/collections';

export const collectionsEntitiesAdapter = createEntityAdapter({
  selectId: (data) => data.node.id,
});

const initialState = collectionsEntitiesAdapter.getInitialState();

const collectionsEntitiesSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.fulfilled, (state, action) => {
        collectionsEntitiesAdapter.setMany(state, action.payload);
      });
  },
  initialState,
  name: 'collections',
});

export const {
  selectById: getCollectionById,
  selectEntities: getCollectionsEntities,
} = collectionsEntitiesAdapter.getSelectors((state) => state.entities?.collections);

export default collectionsEntitiesSlice.reducer;
