import styled from 'styled-components';
import OriginalIcon from '../../ui/Icon';
import { space } from '../../ui/helpers';

const Navigation = styled.nav`
  align-items: center;
  display: flex;
`;

const NavItem = styled.a`
  padding: ${space(0.25)} ${space(0.5)};
`;

const Icon = styled(OriginalIcon)`
  border-right: 1px solid ${({ theme }) => theme.colors.textLighter};
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.link};
  height: 18px;
  margin: 0 ${space(0.25)} 0 0;
  padding: 0 ${space(0.5)} 0 0;
  width: 18px;
`;

export { Icon, NavItem };
export default Navigation;
