import React from 'react';
import Head from 'next/head';

import { I18nPage, includeDefaultNamespaces, useTranslation } from '../i18n';
import Base from '../layouts/Base';
import Wrapper from '../ui/Wrapper';
import Submit from '../components/Submit';
import PostList from '../components/PostList';
import withData from '../lib/apollo';

const Home: I18nPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Base>
      <Head>
        <title>{t('home:title')}</title>
      </Head>
      <Wrapper>
        <Submit />
        <PostList />
      </Wrapper>
    </Base>
  );
};

Home.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces(['home'])
  };
};

export default withData(Home);
