import styled from 'styled-components';
import { hover, ms, space } from '../../ui/helpers';

interface ILinkText {
  isActive?: Boolean;
}

const Container = styled.header`
  margin: 0 0 ${space()};
`;

const LinkText = styled.a<ILinkText>`
  cursor: pointer;
  font-size: ${ms(-1)};
  margin-right: ${space(0.25)};
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};

  ${hover`
    color: ${({ theme }) => theme.color.secondary500};
  `}
`;

export { Container, LinkText };
