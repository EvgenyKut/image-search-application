import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { CustomSnackBar } from './components';
import AppRouter from './AppRouter';

const App = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <CustomSnackBar />
      <AppRouter />
    </Provider>
  );
};

export default App;
