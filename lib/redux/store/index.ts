import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todoReducers from '../slices/todo';


const rootReducer = combineReducers({todo:todoReducers})

const createStore = (preloadedState:any=[]) => {
    return configureStore({
        reducer:rootReducer,
        preloadedState,
    });
};

let store:any;
export const initialiseStore = (preloadedState:any) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
   _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};


export default initialiseStore;