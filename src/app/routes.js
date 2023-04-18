import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

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
