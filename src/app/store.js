import { combineReducers, configureStore } from '@reduxjs/toolkit';

import collectionsEntitiesReducer from '../entities/collections';

export const store = configureStore({
  reducer: {
    entities: combineReducers({
      collections: collectionsEntitiesReducer,
    }),
  },
});
