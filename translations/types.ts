import { LOCALES } from './config';

export type Locale = typeof LOCALES[number];

export const isLocale = (tested: string): tested is Locale =>
  LOCALES.some(locale => locale === tested);
