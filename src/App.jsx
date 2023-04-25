import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import createRouter from './app/routes';

import { store } from './app/store';
import './style.css';

function App() {
  const router = createRouter();
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
