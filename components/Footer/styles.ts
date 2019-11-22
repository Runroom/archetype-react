import styled from "styled-components";
import { ms, space } from "../../ui/helpers";

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${ms(-1)};
  padding: ${space()} 0;
`;

export { Footer };
