import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesDictionary } from './constants/routes';
import Layout from './pages/Layout';
import Login from './pages/Login';
import { AuthRoute } from './components';
import ImagesSearch from './pages/ImagesSearch';
import Error from './pages/Error';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesDictionary.HOME} element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path={RoutesDictionary.IMAGES}
            element={
              <AuthRoute baseUrl={RoutesDictionary.HOME}>
                <ImagesSearch />
              </AuthRoute>
            }
          />
          <Route path={RoutesDictionary.OTHER_PAGES} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
