import React from 'react';
import { Outlet } from 'react-router-dom';

import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';

function Root() {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default Root;
