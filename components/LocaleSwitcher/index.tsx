import React from 'react';

import { i18n } from '../../i18n';

const LocaleToggler = () => {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('es')}>es</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
    </div>
  );
};

export default LocaleToggler;
