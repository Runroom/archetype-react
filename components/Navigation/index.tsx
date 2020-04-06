import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from '../../i18n';
import Anchor from '../../ui/Anchor';
import routes from '../../config/routes.json';
import { NavItem } from './styles';

const Navigation = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav>
      <ul>
        <li>
          <Link href={routes.home}>
            <Anchor as={NavItem} isActive={!!(pathname === routes.home)}>
              {t('navigation.home')}
            </Anchor>
          </Link>
        </li>
        <li>
          <Link href={routes.about}>
            <Anchor as={NavItem} isActive={!!(pathname === routes.about)}>
              {t('navigation.about')}
            </Anchor>
          </Link>
        </li>
        <li>
          <Link href={routes.python}>
            <Anchor as={NavItem} isActive={!!(pathname === routes.python)}>
              {t('navigation.python')}
            </Anchor>
          </Link>
        </li>
        <li>
          <Anchor
            as={NavItem}
            href="https://github.com/italodr/archetype-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Anchor>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
