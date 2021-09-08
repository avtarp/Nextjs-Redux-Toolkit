import '../styles/globals.css'

import { useEffect } from 'react';
import App from 'next/app';
import type { AppProps ,AppContext } from 'next/app'
import initialiseStore from '../lib/redux/store'
import {Provider,useStore} from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
    const reduxStore = initialiseStore({todo:[{id:1,title:'test'}]})
    console.log(reduxStore.getState())


  return (
    
  <Provider store={reduxStore}>
      <Component {...pageProps} />
  </Provider>
  
  );
}



export default MyApp
