import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { imageAPI } from '../services/ImageService';
import {
  paginationReducer,
  authReducer,
  searchFocusReducer,
  snackBarReducer,
} from './reducers';

const rootReducer = combineReducers({
  paginationReducer,
  authReducer,
  searchFocusReducer,
  snackBarReducer,
  [imageAPI.reducerPath]: imageAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(imageAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
