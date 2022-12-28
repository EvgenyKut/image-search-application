import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Error from '../pages/Error';
import ImagesSearch from '../pages/ImagesSearch';
import Layout from '../pages/Layout';
import Login from '../pages/Login';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="/images"
          element={
            <PrivateRoute>
              <ImagesSearch />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
