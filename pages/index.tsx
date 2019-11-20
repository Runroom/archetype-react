import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Base from '../layouts/Base';
import Wrapper from '../ui/Wrapper';
import Submit from '../components/Submit';
import PostList from '../components/PostList';
import withData from '../lib/apollo';

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Base>
    <Head>
      <title>Index page</title>
    </Head>
    <Wrapper>
      <Submit />
      <PostList />
    </Wrapper>
  </Base>
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default withData(Index);
