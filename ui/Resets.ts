import { css } from 'styled-components';

const Button = css`
  [role='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export { Button };
