import { combineReducers, configureStore } from '@reduxjs/toolkit';

import catalogListReducer from '../pages/Catalog/Catalog.state';
import productReducer from '../pages/Product/Product.state';
import catalogEntitiesReducer from '../reducers/entities/catalog';

const store = configureStore({
  reducer: {
    entities: combineReducers({
      catalog: catalogEntitiesReducer,
    }),
    catalogList: catalogListReducer,
    product: productReducer,
  },
});

export default store;
