import './App.css';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { CustomSnackBar } from './components';
import AppRouter from './AppRouter';
import { Provider as RollbarProvider } from '@rollbar/react';
const App = () => {
  const store = setupStore();

  const rollbarConfig = {
    accessToken: 'MY_TOKEN',
    captureUncaught: true,
    captureUnhandledRejections: true,
    autoInstrument: {
      network: true,
      log: true,
      dom: true,
      navigation: true,
      connectivity: true,
    },
    payload: {
      client: {
        javascript: {
          code_version: '1.0.0',
          source_map_enabled: true,
        },
      },
    },
  };

  const errorHandler = () => {
    throw new Error('Tes');
  };
  return (
    <RollbarProvider config={rollbarConfig}>
      <Provider store={store}>
        <CustomSnackBar />
        <button onClick={errorHandler}>Test</button>
        <AppRouter />
      </Provider>
    </RollbarProvider>
  );
};

export default App;
