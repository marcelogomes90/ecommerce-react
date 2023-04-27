import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import createRouter from './app/routes';

import store from './app/store';
import './style.css';

const theme = {
  token: {
    colorPrimary: '#9254de',
  },
};

function App() {
  const router = createRouter();
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
