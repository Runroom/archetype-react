import React from 'react';

import { i18n } from '../../i18n';
import Languages, { Language } from './styles';

const LocaleToggler = () => {
  return (
    <Languages>
      <Language
        isActive={i18n.language === 'es'}
        onClick={() => i18n.changeLanguage('es')}
      >
        es
      </Language>
      <Language
        isActive={i18n.language === 'en'}
        onClick={() => i18n.changeLanguage('en')}
      >
        en
      </Language>
      <Language
        isActive={i18n.language === 'de'}
        onClick={() => i18n.changeLanguage('de')}
      >
        de
      </Language>
    </Languages>
  );
};

export default LocaleToggler;
