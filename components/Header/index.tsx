import Link from 'next/link';
import { useRouter } from 'next/router';

import Wrapper from '../../ui/Wrapper';
import { Container, LinkText } from './styles';

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Container>
      <Wrapper>
        <Link href='/'>
          <LinkText isActive={!!(pathname === '/' && 'is-active')}>
            Home
          </LinkText>
        </Link>
        <Link href='/about'>
          <LinkText isActive={!!(pathname === '/about' && 'is-active')}>
            About
          </LinkText>
        </Link>
        <LinkText
          href='https://github.com/ads1018/next-apollo-example'
          target='__blank'
          rel='noopener noreferrer'>
          Github
        </LinkText>
      </Wrapper>
    </Container>
  );
};

export default Header;
