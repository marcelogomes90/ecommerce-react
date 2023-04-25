import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const createRouter = () => createBrowserRouter([{
  element: <Home />,
  path: '/home',
  index: true,
}, {
  children: [{
    element: <Login />,
    path: '/login',
  }],
  element: <Root />,
  path: '/',
}]);

export default createRouter;
