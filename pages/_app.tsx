import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { persistStore } from 'redux-persist';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper, initialiseStore } from '../lib/redux/store';
import NavBar from '../Layouts/navBarLayout';

import { Provider } from 'react-redux';
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
  const persistor = persistStore(reduxStore);

  // removing on every page refresh
  useEffect(() => {
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const getLayout = Component.getLayout || ((page: any) => <>{page}</>);

  const hasHeader = () => {
    if (props?.header ?? true) {
      return <NavBar>{getLayout(<Component {...pageProps} />)}</NavBar>;
    }
    return <Component {...pageProps} />;
  };

  return process.browser ? (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {hasHeader()}
      </PersistGate>
    </Provider>
  ) : (
    <Provider store={reduxStore}>{hasHeader()}</Provider>
  );
}

export default wrapper.withRedux(MyApp);
