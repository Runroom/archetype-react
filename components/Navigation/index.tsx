import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import LocaleSwitcher from '../LocaleSwitcher';
import { useTranslation } from '../../i18n';
import Anchor from '../../ui/Anchor';
import ThemeSwitcher from '../../svg/theme-switcher.svg';
import routes from '../../config/routes.json';
import NavigationStyled, { Icon, NavItem } from './styles';

const Navigation = props => {
  const { toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname } = router;
  return (
    <NavigationStyled>
      <Icon onClick={() => toggleTheme()} as={ThemeSwitcher} />
      <Link href={routes.home}>
        <Anchor as={NavItem} isActive={!!(pathname === routes.home)}>
          {t('navigation.home')}
        </Anchor>
      </Link>
      <Link href={routes.about}>
        <Anchor as={NavItem} isActive={!!(pathname === routes.about)}>
          {t('navigation.about')}
        </Anchor>
      </Link>
      <Link href={routes.python}>
        <Anchor as={NavItem} isActive={!!(pathname === routes.python)}>
          {t('navigation.python')}
        </Anchor>
      </Link>
      <Anchor
        as={NavItem}
        href="https://github.com/ads1018/next-apollo-example"
        target="__blank"
        rel="noopener noreferrer"
      >
        Github
      </Anchor>
      <LocaleSwitcher {...props} />
    </NavigationStyled>
  );
};

export default Navigation;
