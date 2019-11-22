import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import TagManager from "react-gtm-module";

import GlobalStyles from "../ui/Globals";
import { gtmCode } from "../config/site.json";
import { light, dark, colors } from "../config/theme";
import settings from "../config/settings.json";

class MyApp extends App {
  state = {
    theme: "dark"
  };

  componentDidMount() {
    const theme = window.localStorage.getItem("theme") || "dark";
    this.setState({ theme });
    TagManager.initialize({ id: gtmCode });
  }

  toggleTheme() {
    const theme = this.state.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", theme);
    this.setState({ theme });
  }

  render() {
    const { Component, pageProps } = this.props;
    const CONTEXT_PROPS = {
      colors: this.state.theme === "light" ? light : dark,
      palette: colors,
      toggleTheme: this.toggleTheme,
      settings
    };

    return (
      <ThemeProvider theme={CONTEXT_PROPS}>
        <>
          <Head>
            <link href={settings.font.url} rel="stylesheet"></link>
            <GlobalStyles theme={CONTEXT_PROPS} />
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
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
