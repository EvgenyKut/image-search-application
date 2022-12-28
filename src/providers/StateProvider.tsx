import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

type StateProviderProps = {
  children: ReactElement;
};
const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const store = setupStore();
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
