import NextI18next from 'next-i18next';
import { NextComponentType, NextPageContext } from 'next';
import { useTranslation, initReactI18next } from 'react-i18next';

const NextI18NextInstance = new NextI18next({
  debug: true,
  browserLanguageDetection: false,
  lng: 'es',
  defaultLanguage: 'es',
  defaultNS: 'common',
  fallbackLng: ['es'],
  keySeparator: '.',
  localePath:
    typeof window === 'undefined' ? 'public/translations' : 'translations',
  otherLanguages: ['en', 'de'],
  use: [initReactI18next]
});

const includeDefaultNamespaces = (namespaces: string[]) =>
  ['common', '_error'].concat(namespaces);

export const { appWithTranslation, Trans, i18n } = NextI18NextInstance;
export { includeDefaultNamespaces, useTranslation };

export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
