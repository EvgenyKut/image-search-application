import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesDictionary } from './constants/routes';
import { useAppSelector } from './hooks';
import { ImagesSearch, Layout, Login, Error } from './pages';

const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesDictionary.HOME} element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path={RoutesDictionary.IMAGES}
            element={isAuth ? <ImagesSearch /> : <Login />}
          />
          <Route path={RoutesDictionary.OTHER_PAGES} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
