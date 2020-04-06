import React from 'react';

import { useTranslation } from '../../i18n';
import Anchor from '../../ui/Anchor';
import { Footer } from './styles';

const FooterComponent = () => {
  const { t } = useTranslation();
  return (
    <Footer>
      {t('madeBy')}{' '}
      <Anchor
        href="https://runroom.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        @Runroom
      </Anchor>
    </Footer>
  );
};

export default FooterComponent;
