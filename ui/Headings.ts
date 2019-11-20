import styled, { css } from 'styled-components';
import { ms, space } from './helpers';

const baseTitleStyles = css`
  font-family: ${({ theme }) => theme.font.secondary};
`;

const Title1 = styled.h1`
  ${baseTitleStyles}
  font-size: ${ms(3)};
  margin: 0 0 ${space()};
`;

const Title2 = styled.h2`
  ${baseTitleStyles}
  font-size: ${ms(2)};
  margin: 0 0 ${space(0.5)};
`;

const Title3 = styled.h3`
  ${baseTitleStyles}
  font-size: ${ms(1.5)};
  margin: 0 0 ${space(0.25)};
`;

const Title4 = styled.h4`
  font-size: ${ms(1.25)};
  margin: 0 0 ${space(0.25)};
`;

export { Title1, Title2, Title3, Title4 };
