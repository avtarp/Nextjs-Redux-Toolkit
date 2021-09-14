import { Provider as AuthProvider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Provider, useStore } from 'react-redux';
import NavBar from '../layouts/navBarLayout';
import { initialiseStore, wrapper } from '../lib/redux/store';
import '../styles/globals.css';

type propsWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		getLayout?: any;
	};
};

function MyApp({ Component, pageProps }: propsWithLayout) {
	const { props } = pageProps;
	const store = useStore();
	const reduxStore = initialiseStore(store);

	// removing on every page refresh
	useEffect(() => {
		const jssStyles: any = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const getLayout = Component.getLayout || ((page: any) => <>{page}</>);

	return (
		<AuthProvider>
			<Provider store={reduxStore}>
				<NavBar>{getLayout(<Component {...pageProps} />)}</NavBar>
			</Provider>
		</AuthProvider>
	);
}

export default wrapper.withRedux(MyApp);
