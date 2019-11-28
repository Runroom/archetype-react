import styled from 'styled-components';

const Dots = styled.div`
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.button};
  border-radius: 50%;
  animation-fill-mode: both;
`;

export { Dots, Dot };
