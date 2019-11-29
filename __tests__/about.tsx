/* eslint-env jest */
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { act, render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { ThemeProvider } from 'styled-components';

import { i18n } from '../i18n';
import About from '../pages/about';
import THEME from '../__mocks__/theme';

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
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={THEME}>
            <About />
          </ThemeProvider>
        </I18nextProvider>
      </RouterContext.Provider>
    ).container;
  });

  expect(container.textContent).toMatch(
    /we integrate Apollo seamlessly with Next/
  );
});
