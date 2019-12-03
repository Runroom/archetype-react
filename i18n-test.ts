import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import _error from './public/translations/en/_error.json';
import about from './public/translations/en/about.json';
import common from './public/translations/en/common.json';
import home from './public/translations/en/home.json';
import python from './public/translations/en/python.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      _error: {
        ..._error
      },
      about: {
        ...about
      },
      common: {
        ...common
      },
      home: {
        ...home
      },
      python: {
        ...python
      }
    }
  },
  debug: false
});

export default i18n;
