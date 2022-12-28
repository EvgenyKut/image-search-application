import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector, useLocalStorageState } from '../hooks';
import { Header, ThemeToggler } from '../components';

const Layout = () => {
  const [, setIsAuthData] = useLocalStorageState('search-app-auth', {
    auth: false,
    name: '',
  });
  const { isAuth, name } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (isAuth) {
      setIsAuthData({ auth: isAuth, name: name });
    }
  }, [isAuth, name, setIsAuthData]);

  return (
    <>
      <Header>
        <ThemeToggler />
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
