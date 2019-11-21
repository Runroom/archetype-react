import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import TagManager from "react-gtm-module";

import GlobalStyles from "../ui/Globals";
import { gtmCode } from "../config/site.json";
import theme from "../config/theme.json";
import settings from "../config/settings.json";

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize({ id: gtmCode });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link href={settings.font.url} rel="stylesheet"></link>
          <GlobalStyles theme={theme.dark.color} />
        </Head>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmCode}`}
            height="0"
            width="0"
            title="GTM Tracking"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider theme={{ ...theme.dark, ...settings }}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
