import React from 'react';

import useTranslation from '../../lib/hooks/useTranslation';
import Wrapper from '../../ui/Wrapper';
import { Footer } from './styles';

const FooterComponent = () => {
  const { t } = useTranslation();
  return (
    <Footer>
      <Wrapper>
        {t('madeBy')}{' '}
        <a href='https://runroom.com' target='_blank' rel='noreferrer noopener'>
          @Runroom
        </a>
      </Wrapper>
    </Footer>
  );
};

export default FooterComponent;
