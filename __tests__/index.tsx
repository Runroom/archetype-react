/* eslint-env jest */
import React from 'react';
import { act, render, waitForElement } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { ThemeProvider } from 'styled-components';

import Index from '../pages/index';
import THEME from '../__mocks__/theme';

const routerValue = {
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/'
};

it('renders attribution footnote', async () => {
  let container;
  await act(async () => {
    container = render(
      <RouterContext.Provider value={routerValue}>
        <ThemeProvider theme={THEME}>
          <Index />
        </ThemeProvider>
      </RouterContext.Provider>
    ).container;
  });

  expect(container.textContent).toMatch(/Made by @Runroom/);
});

it('renders some posts from the query', async () => {
  let findAllByTestId;
  await act(async () => {
    const renderResult = render(
      <RouterContext.Provider value={routerValue}>
        <ThemeProvider theme={THEME}>
          <Index />
        </ThemeProvider>
      </RouterContext.Provider>
    );

    findAllByTestId = renderResult.findAllByTestId;
  });

  const listEntries = await waitForElement(() =>
    findAllByTestId('postListListItem')
  );

  expect(listEntries.length).toBeGreaterThan(0);
});
