import styled from 'styled-components';
import OriginalIcon from '../../ui/Icon';
import { space } from '../../ui/helpers';

const Icon = styled(OriginalIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.link};
  height: ${space()};
  /* margin: 0 ${space(0.25)} 0 0;
  padding: 0 ${space(0.5)} 0 0; */
  width: ${space()};
`;

export { Icon };
