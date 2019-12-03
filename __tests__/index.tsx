/* eslint-env jest */
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render, waitForElement } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { ThemeProvider } from 'styled-components';

import i18n from '../i18n-test';
import Index from '../pages/index';
import THEME from '../__mocks__/theme';

const routerValue = {
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/'
};

it('renders attribution footnote', async () => {
  const container = render(
    <RouterContext.Provider value={routerValue}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={THEME}>
          <Index />
        </ThemeProvider>
      </I18nextProvider>
    </RouterContext.Provider>
  ).container;

  expect(container.textContent).toMatch(/Made by @Runroom/);
});

it('renders some posts from the query', async () => {
  const renderResult = render(
    <RouterContext.Provider value={routerValue}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={THEME}>
          <Index />
        </ThemeProvider>
      </I18nextProvider>
    </RouterContext.Provider>
  );

  const findAllByTestId = renderResult.findAllByTestId;

  const listEntries = await waitForElement(() =>
    findAllByTestId('postListListItem')
  );

  expect(listEntries.length).toBeGreaterThan(0);
});
