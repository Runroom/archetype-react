import styled from "styled-components";

const Anchor = styled.a<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.secondary500 : theme.color.link500};
  text-decoration: none;
`;

export default Anchor;
