import React from 'react';
import { NextPageContext } from 'next';

interface IProps {
  statusCode?: number;
}

const ErrorPage = ({ statusCode }: IProps) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorPage;
