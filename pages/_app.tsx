import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import TagManager from 'react-gtm-module';

import GlobalStyles from '../ui/Globals';
import { GTM_CODE } from '../config/site';
import theme from '../config/theme';

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize({ id: GTM_CODE });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link href={theme.font.url} rel='stylesheet'></link>
          <GlobalStyles />
        </Head>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CODE}`}
            height='0'
            width='0'
            title='GTM Tracking'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
