import { combineReducers, configureStore } from '@reduxjs/toolkit';

import productsListReducer from '../pages/Catalog/Catalog.state';
import productsEntitiesReducer from '../reducers/entities/products';

const store = configureStore({
  reducer: {
    entities: combineReducers({
      products: productsEntitiesReducer,
    }),
    productsList: productsListReducer,
  },
});

export default store;
