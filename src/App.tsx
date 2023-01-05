import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { setupStore } from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routes as RoutesDictionary } from './constants/routes';
import Layout from './pages/Layout';
import Login from './pages/Login';
import { AuthRoute, Notification } from './components';
import ImagesSearch from './pages/ImagesSearch';
import Error from './pages/Error';

const App = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <Notification />
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
    </Provider>
  );
};

export default App;
