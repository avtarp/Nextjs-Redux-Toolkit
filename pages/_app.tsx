import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'reduxjs-toolkit-persist';
import { initialiseStore } from '../lib/redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	const store = initialiseStore({ todo: [{ id: 1, title: 'test' }] });
	// const persistor = persistStore(store);

	return (
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<Component {...pageProps} />
			{/* </PersistGate> */}
		</Provider>
	);
}

export default MyApp;
