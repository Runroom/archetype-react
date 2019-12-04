import styled from 'styled-components';
import { rems, space } from './helpers';

const Wrapper = styled('div')<{ reader?: boolean }>`
  margin: 0 auto;
  max-width: ${({ theme, reader }) =>
    reader
      ? rems(theme.settings.breakpoint.reader)
      : rems(theme.settings.breakpoint.maxWidth)};
  padding-left: ${space(0.75)};
  padding-right: ${space(0.75)};

  @media (min-width: 48em) {
    padding-left: ${space()};
    padding-right: ${space()};
  }

  @media (min-width: calc(64em + 2rem)) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Reader = styled.div`
  max-width: ${({ theme }) => rems(theme.settings.breakpoint.reader)};
`;

export { Reader };
export default Wrapper;
