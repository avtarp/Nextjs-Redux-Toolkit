import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authApi } from './api/authApi';
import rootReducer from './rootReducer';

const createStore = (preloadedState: any = []) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware: any) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}).concat(authApi.middleware),
	});
};

let store: any;

export const initialiseStore = (preloadedState: any) => {
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
export default initialiseStore;
