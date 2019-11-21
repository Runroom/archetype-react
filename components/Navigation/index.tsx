import Link from 'next/link';
import { useRouter } from 'next/router';

import useTranslation from '../../lib/hooks/useTranslation';
import LocaleSwitcher from '../LocaleSwitcher';
import { LinkText } from './styles';

const Navigation = () => {
  const { locale, t } = useTranslation();
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <Link href='/[lang]' as={`/${locale}`}>
        <LinkText isActive={!!(pathname === '/' && 'is-active')}>
          {t('home.menu')}
        </LinkText>
      </Link>
      <Link href='/[lang]/about' as={`/${locale}/artist`}>
        <LinkText isActive={!!(pathname === '/about' && 'is-active')}>
          {t('about.menu')}
        </LinkText>
      </Link>
      <LinkText
        href='https://github.com/ads1018/next-apollo-example'
        target='__blank'
        rel='noopener noreferrer'>
        Github
      </LinkText>
      <LocaleSwitcher />
    </>
  );
};

export default Navigation;
