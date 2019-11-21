/* eslint-env jest */
import React from 'react';
import { act, render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { ThemeProvider } from 'styled-components';

import About from '../pages/[lang]/about';
import theme from '../config/theme.json';

it('says "we integrate Apollo seamlessly with Next"', async () => {
  const router = {
    pathname: '/about',
    route: '/about',
    query: {},
    asPath: '/about'
  };

  let container;
  await act(async () => {
    container = render(
      <RouterContext.Provider value={router}>
        <ThemeProvider theme={theme}>
          <About />
        </ThemeProvider>
      </RouterContext.Provider>
    ).container;
  });

  expect(container.textContent).toMatch(
    /we integrate Apollo seamlessly with Next/
  );
});
