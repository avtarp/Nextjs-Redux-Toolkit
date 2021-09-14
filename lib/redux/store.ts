import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import { setupListeners } from '@reduxjs/toolkit/query/react';

import { authApi } from './api/authApi';
import { postApi } from './api/postApi';
import rootReducer from './rootReducer';

const isClient: boolean = typeof window !== 'undefined';

const createStore = (preloadedState: any = {}) => {
  let reducer: any = rootReducer;

  if (isClient) {
    const storage = require('redux-persist/lib/storage').default;
    const { persistReducer } = require('redux-persist');

    const todoPersistConfig = {
      key: 'root',
      storage,
    };
    reducer = persistReducer(todoPersistConfig, rootReducer);
  }

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
  store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    store = createStore({ ...store.getState(), ...preloadedState });
  }

  return store;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = (): any => useDispatch<AppDispatch>();

export const wrapper = createWrapper(initialiseStore);

//Enable refetchOnMount and refetchOnReconnect behaviors.
setupListeners(store.dispatch);
