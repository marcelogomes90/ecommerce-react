import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import ProductContainer from '../pages/Product/ProductContainer';
import CatalogContainer from '../pages/Catalog/CatalogContainer';
import Home from '../pages/Home/Home';

const createRouter = () => createBrowserRouter([{
  element: <Home />,
  path: '/home',
}, {
  children: [{
    element: <CatalogContainer />,
    path: '/',
    index: true,
  }, {
    element: <ProductContainer />,
    path: '/products/:id',
  }],
  element: <Root />,
  path: '/',
}]);

export default createRouter;
