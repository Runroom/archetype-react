import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPageContext } from 'next';

import {
  I18nPage,
  Trans,
  includeDefaultNamespaces,
  useTranslation
} from '../i18n';

import site from '../config/site.json';

interface IProps {
  statusCode?: number;
  namespacesRequired: any;
}

const ErrorPage: I18nPage = ({ statusCode }: IProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('_error.title')}</title>
      </Head>
      <h1>
        {t('_error.h1')}
        {statusCode ? `: ${statusCode}` : ''}
      </h1>
      <p>
        <Trans i18nKey='_error:explanation'>
          <a href={`mailto:${site.contactEmail}`}>email</a>
        </Trans>
        <Link href='/'>
          <a>{t('signature')}</a>
        </Link>
      </p>
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return {
    statusCode,
    namespacesRequired: includeDefaultNamespaces([])
  };
};

export default ErrorPage;
