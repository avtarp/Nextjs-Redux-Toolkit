import { createTheme, Theme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import NavBar from '../layouts/navBarLayout';
import initialiseStore from '../lib/redux/store';
import '../styles/globals.css';

type propsWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		getLayout: (component: React.ReactNode) => JSX.Element;
	};
};

declare module '@mui/styles' {
	interface DefaultTheme extends Theme {}
}

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

	const theme = createTheme();
	// const theme = useTheme();

	return (
		<Provider store={reduxStore}>
			<ThemeProvider theme={theme}>
				<NavBar>{getLayout(<Component {...pageProps} />)}</NavBar>
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
