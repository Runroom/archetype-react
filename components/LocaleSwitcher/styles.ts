import styled from 'styled-components';
import { hover, ms, space } from '../../ui/helpers';

const Languages = styled.nav`
  margin-left: auto;
  padding: ${space(0.5)};
`;

const Language = styled.button<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) =>
    isActive ? '1px solid currentColor' : 'none'};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.linkActive : theme.colors.link};
  cursor: pointer;
  font-size: ${ms(-1)};
  padding: ${space(0.5)} ${space(0.25)};
  ${({ isActive }) => isActive && 'pointer-events: none;'};

  ${hover`
    color: ${({ theme }) => theme.colors.linkHover};
  `}
`;

export { Language };
export default Languages;
