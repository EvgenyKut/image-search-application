import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRoute from '../components/AuthRoute';
import Error from '../pages/Error';
import ImagesSearch from '../pages/ImagesSearch';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import { Routes as RoutesDictionary } from '../constants/routes';

const RouterProvider = () => (
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

export default RouterProvider;
