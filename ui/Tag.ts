import styled from 'styled-components';
import { space } from './helpers';

const Tag = styled.span`
  background: ${({ theme }) => theme.color.neutro200};
  margin: 0 ${space(0.15)} 0 0;
  padding: ${space(0.15)} ${space(0.5)};
`;

export default Tag;
