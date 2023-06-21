import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import ProductContainer from '../pages/Product/ProductContainer';
import CatalogContainer from '../pages/Catalog/CatalogContainer';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const createRouter = () => createBrowserRouter([{
  children: [{
    element: <Home />,
    path: '/home',
    index: true,
  }, {
    element: <CatalogContainer />,
    path: '/catalog',
  }, {
    element: <ProductContainer />,
    path: '/catalog/:id',
  }, {
    element: <Login />,
    path: '/login',
  }],
  element: <Root />,
  path: '/',
}]);

export default createRouter;
