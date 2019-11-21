import React, { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { LOCALES, LOCALE_NAMES } from '../../translations/config';
import { LocaleContext } from '../../lib/context/LocaleContext';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale } = useContext(LocaleContext);

  const handleLocaleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const regex = new RegExp(`^/(${LOCALES.join('|')})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${e.target.value}`)
      );
    },
    [router]
  );

  return (
    <select value={locale} onChange={handleLocaleChange}>
      {LOCALES.map(item => (
        <option key={item} value={item}>
          {LOCALE_NAMES[item]}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitcher;
