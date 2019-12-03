import styled from 'styled-components';
import { space } from './helpers';

const Button = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid currentColor;
  color: ${({ theme }) => theme.colors.text};
  display: inline-flex;
  padding: ${space(0.25)} ${space(0.5)};

  :active: {
    background: transparent;
  }

  ::before {
    align-self: center;
    border-color: transparent transparent currentColor transparent;
    border-style: solid;
    border-width: 0 4px 6px 4px;
    content: '';
    height: 0;
    margin-right: 5px;
    width: 0;
  }
`;

export default Button;
