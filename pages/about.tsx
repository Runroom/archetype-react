import React from 'react';
import Head from 'next/head';

import { I18nPage, includeDefaultNamespaces, useTranslation } from '../i18n';
import { Reader } from '../ui/Wrapper';
import Base from '../layouts/Base';
import SEO from '../components/SEO';

const About: I18nPage = () => {
  const { t } = useTranslation();
  return (
    <Base>
      <Head>
        <SEO title={t('about:title')} />
      </Head>
      <Reader as="article">
        <h1>{t('about:title')}</h1>
        <blockquote>Not translated 👇🏾</blockquote>
        <p>
          <a href="http://dev.apollodata.com">Apollo</a> is a GraphQL client
          that allows you to easily query the exact data you need from a GraphQL
          server. In addition to fetching and mutating data, Apollo analyzes
          your queries and their results to construct a client-side cache of
          your data, which is kept up to date as further queries and mutations
          are run, fetching more results from the server.
        </p>
        <p>
          In this simple example, we integrate Apollo seamlessly with{' '}
          <a href="https://github.com/zeit/next.js">Next</a> by wrapping our
          pages inside a{' '}
          <a href="https://facebook.github.io/react/docs/higher-order-components.html">
            higher-order component (HOC)
          </a>
          . Using the HOC pattern we're able to pass down a central store of
          query result data created by Apollo into our React component hierarchy
          defined inside each page of our Next application.
        </p>
        <p>
          On initial page load, while on the server and inside getInitialProps,
          we invoke the Apollo method,{' '}
          <a href="http://dev.apollodata.com/react/server-side-rendering.html#getDataFromTree">
            getDataFromTree
          </a>
          . This method returns a promise; at the point in which the promise
          resolves, our Apollo Client store is completely initialized.
        </p>
        <p>
          This example relies on <a href="http://graph.cool">graph.cool</a> for
          its GraphQL backend.
        </p>
      </Reader>
    </Base>
  );
};

About.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces(['about'])
  };
};

export default About;
