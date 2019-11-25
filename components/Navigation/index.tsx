import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import LocaleSwitcher from '../LocaleSwitcher';
import { useTranslation } from '../../i18n';
import Anchor from '../../ui/Anchor';
import routes from '../../config/routes.json';

const Navigation = props => {
  const { toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <a onClick={() => toggleTheme()}>Toggle</a>
      <Link href={routes.home}>
        <Anchor isActive={!!(pathname === routes.home)}>
          {t('navigation.home')}
        </Anchor>
      </Link>
      <Link href={routes.about}>
        <Anchor isActive={!!(pathname === routes.about)}>
          {t('navigation.about')}
        </Anchor>
      </Link>
      <Anchor
        href='https://github.com/ads1018/next-apollo-example'
        target='__blank'
        rel='noopener noreferrer'>
        Github
      </Anchor>
      <LocaleSwitcher {...props} />
    </>
  );
};

export default Navigation;
