import styled from 'styled-components';
import { space } from '../helpers';

const SkipLink = styled.a`
  background: ${({ theme }) => theme.color.neutro900};
  border: 0;
  color: ${({ theme }) => theme.color.neutro100};
  font-size: 1.25rem;
  left: -120%;
  margin: ${space(1)} 0;
  padding: ${space(0.25)} ${space(0.5)};
  position: absolute;
  text-align: center;
  top: 0;
  z-index: 2;

  &:focus,
  &:active {
    left: 10%;
  }
`;

export default SkipLink;
