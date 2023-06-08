import React from 'react';
import { Outlet } from 'react-router-dom';

import AppFooter from './components/Footer/Footer';
import AppHeaderContainer from './components/Header/HeaderContainer';

function Root() {
  return (
    <>
      <AppHeaderContainer />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default Root;
