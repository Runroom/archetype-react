import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import strings from '../../translations/strings';
import { DEFAULT_LOCALE } from '../../translations/config';

const useTranslation = () => {
  const { locale } = useContext(LocaleContext);

  const t = (key: string) => {
    const tokens = key.split('.');
    let transDefault = strings[DEFAULT_LOCALE];
    let trans = strings[locale];

    tokens.map(value => {
      transDefault = transDefault[value];
      trans = trans[value];
    });

    if (trans === undefined) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return trans || transDefault || '';
  };

  return {
    t,
    locale
  };
};

export default useTranslation;
