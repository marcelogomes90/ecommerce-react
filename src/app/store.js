import { combineReducers, configureStore } from '@reduxjs/toolkit';

import productsEntitiesReducer from '../reducers/entities/products';

export const store = configureStore({
  reducer: {
    entities: combineReducers({
      products: productsEntitiesReducer,
    }),
  },
});
