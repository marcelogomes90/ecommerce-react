import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from './Header';

function AppHeaderContainer() {
  const [currentMenu, setCurrentMenu] = useState('/');
  const navigate = useNavigate();

  const onMenuItemClick = useCallback((event) => {
    setCurrentMenu(event.key);
    navigate(`/${event.key}`);
  });

  const onLoginClick = useCallback(() => {
    navigate('/login');
  })

  return (
    <AppHeader
      currentMenu={currentMenu}
      onLoginClick={onLoginClick}
      onMenuItemClick={onMenuItemClick}
    />
  );
}

export default AppHeaderContainer;
