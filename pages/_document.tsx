import { ServerStyleSheets } from '@mui/styles';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='theme-color' />
          <link
            rel='preload'
            href='/static/fonts/poppins/Poppins-Regular.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/static/fonts/poppins/Poppins-Bold.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/static/fonts/poppins/Poppins-Light.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/static/fonts/poppins/Poppins-Medium.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/static/fonts/poppins/Poppins-SemiBold.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/static/fonts/poppins/Poppins-Thin.ttf'
            as='font'
            crossOrigin=''
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App: any) => (props: any) =>
        sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
