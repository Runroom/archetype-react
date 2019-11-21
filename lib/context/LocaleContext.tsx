import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DEFAULT_LOCALE } from '../../translations/config';
import { Locale, isLocale } from '../../translations/types';

interface ContextProps {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
}

const LocaleContext = React.createContext<ContextProps>({
  locale: DEFAULT_LOCALE,
  setLocale: () => null
});

const LocaleProvider: React.FC<{ lang: Locale }> = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  useEffect(() => {
    if (
      typeof query.lang === 'string' &&
      isLocale(query.lang) &&
      locale !== query.lang
    ) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
