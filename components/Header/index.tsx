import Wrapper from '../../ui/Wrapper';
import Navigation from '../Navigation';
import HeaderStyled from './styles';

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <Navigation />
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
