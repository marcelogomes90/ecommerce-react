import { combineReducers, configureStore } from '@reduxjs/toolkit';

import productsEntitiesReducer from '../reducers/entities/products';

const store = configureStore({
  reducer: {
    entities: combineReducers({
      products: productsEntitiesReducer,
    }),
  },
});

export default store;
