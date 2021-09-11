import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import NavBar from '../layouts/navBarLayout';
import { Provider as AuthProvider } from 'next-auth/client';
import initialiseStore from '../lib/redux/store';
import '../styles/globals.css';

type propsWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		getLayout?: any;
	};
};

function MyApp({ Component, pageProps }: propsWithLayout) {
	// removing on every page refresh
	useEffect(() => {
		const jssStyles: any = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const getLayout = Component.getLayout || ((page: any) => <>{page}</>);
	const reduxStore = initialiseStore({ todo: [{ id: 1, title: 'test' }] });

	return (
		<Provider store={reduxStore}>
			<AuthProvider session={pageProps.session}>
			   <NavBar>{getLayout(<Component {...pageProps} />)}</NavBar>
			</AuthProvider>
		</Provider>
	);
}

export default MyApp;
