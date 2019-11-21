import styled from 'styled-components';
import { hover, ms, space } from '../../ui/helpers';

interface ILinkText {
  isActive?: Boolean;
}

const LinkText = styled.a<ILinkText>`
  cursor: pointer;
  font-size: ${ms(-1)};
  margin-right: ${space(0.25)};
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};

  ${hover`
    color: ${({ theme }) => theme.color.secondary500};
  `}
`;

export { LinkText };
