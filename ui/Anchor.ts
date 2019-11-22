import styled from "styled-components";

const Anchor = styled.a<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.linkActive : theme.colors.link};
  text-decoration: none;
`;

export default Anchor;
