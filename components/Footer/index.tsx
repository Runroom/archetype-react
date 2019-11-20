import React from 'react';

import Wrapper from '../../ui/Wrapper';
import { Footer } from './styles';

const FooterComponent = () => (
  <Footer>
    <Wrapper>
      Made by{' '}
      <a href='https://runroom.com' target='_blank' rel='noreferrer noopener'>
        @Runroom
      </a>
    </Wrapper>
  </Footer>
);

export default FooterComponent;
