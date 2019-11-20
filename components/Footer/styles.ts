import styled from 'styled-components';
import { ms, space } from '../../ui/helpers';

const Footer = styled.footer`
  background: ${({ theme }) => theme.color.neutro900};
  color: ${({ theme }) => theme.color.neutro100};
  font-size: ${ms(-1)};
  padding: ${space()} 0;
`;

export { Footer };
