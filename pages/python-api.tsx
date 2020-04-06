import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import { I18nPage, includeDefaultNamespaces, useTranslation } from '../i18n';
import Base from '../layouts/Base';
import Loading from '../components/Loading';
import PythonLinks from '../components/PythonLinks';
import withData from '../lib/python-api';
import { GET_LINKS } from '../lib/gql/python';

const Page: I18nPage = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GET_LINKS);

  return (
    <Base>
      <Head>
        <title>{t('python:title')}</title>
      </Head>
      <h1>{t('python:title')}</h1>
      <p>{t('python:description')}</p>
      {loading ? (
        <Loading />
      ) : data ? (
        <PythonLinks data={data} />
      ) : (
        <div>No data loaded</div>
      )}
    </Base>
  );
};

Page.getInitialProps = () => {
  return {
    namespacesRequired: includeDefaultNamespaces(['python'])
  };
};

export default withData(Page);
