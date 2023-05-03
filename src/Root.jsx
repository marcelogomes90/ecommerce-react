import React from 'react';
import { Outlet } from 'react-router-dom';

import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';
import CatalogContainer from './pages/Catalog/CatalogContainer';

function Root() {
  return (
    <>
      <AppHeader />
      <CatalogContainer />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default Root;
