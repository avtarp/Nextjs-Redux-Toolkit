import "../styles/globals.css";

import React, { useEffect } from "react";
import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import initialiseStore from "../lib/redux/store";
import NavBar from "../Layouts/navBarLayout";
import { Provider, useStore } from "react-redux";

type propsWithLayout = AppProps & {
  Component: AppProps ['Component'] & {
    getLayout?:any
  }
};

function MyApp({ Component, pageProps }: propsWithLayout) {
  const getLayout = Component.getLayout || ((page:any) => <>{page}</>)
  const reduxStore = initialiseStore({ todo: [{ id: 1, title: "test" }] });
  console.log(reduxStore.getState());

  return (
    <Provider store={reduxStore}>
      <NavBar>
        {getLayout( <Component {...pageProps} />)  }
      </NavBar>
    </Provider>
  );
}

export default MyApp;
