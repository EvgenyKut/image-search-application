import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { Header, ThemeToggler } from '../components';
import { addName } from '../store/reducers/AuthSlice';

const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = localStorage.getItem('search-app-name');
    if (data) {
      const name = JSON.parse(data);
      if (name) {
        dispatch(addName({ name: name }));
      }
    }
  }, [dispatch]);

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
