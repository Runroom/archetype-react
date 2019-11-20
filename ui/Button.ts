import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid #e4e4e4;
  color: #000;
  display: inline-flex;

  :active: {
    background: transparent;
  }

  ::before {
    align-self: center;
    border-color: transparent transparent #000000 transparent;
    border-style: solid;
    border-width: 0 4px 6px 4px;
    content: '';
    height: 0;
    margin-right: 5px;
    width: 0;
  }
`;

export default Button;
