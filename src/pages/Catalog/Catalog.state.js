/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import fetchCatalog from '../../services/catalog';
import { catalogEntitiesAdapter } from '../../reducers/entities/catalog';

const INITIAL_STATE = catalogEntitiesAdapter.getInitialState({
  loading: null,
});

const catalogListSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(isAnyOf(
        fetchCatalog.fulfilled,
        fetchCatalog.rejected,
      ), (state) => {
        state.loading = null;
      });
  },
  initialState: INITIAL_STATE,
  name: 'catalogList',
  reducers: {},
});

export const getCatalogListState = (state) => state.catalogList;

export default catalogListSlice.reducer;
