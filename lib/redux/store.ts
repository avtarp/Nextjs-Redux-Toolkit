import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import storage from 'redux-persist/lib/storage';
import { authApi } from './api/authApi';
import { postApi } from './api/postApi';
import rootReducer from './rootReducer';

const todoPersistConfig = {
  key: 'root',
  storage,
};

const isClient: boolean = typeof window !== 'undefined';

const createStore = (preloadedState: any = {}) => {
  const reducer: any = isClient
    ? persistReducer(todoPersistConfig, rootReducer)
    : rootReducer;

  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        serializableCheck: false,
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }).concat(authApi.middleware, postApi.middleware),
    preloadedState,
  });
};

let store: any = createStore();
export const initialiseStore = (preloadedState?: any) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (!isClient) return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = (): any => useDispatch<AppDispatch>();

export const wrapper = createWrapper(initialiseStore);

//Enable refetchOnMount and refetchOnReconnect behaviors.
setupListeners(store.dispatch);
