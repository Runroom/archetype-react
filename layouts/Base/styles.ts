import styled from 'styled-components';
import { media, space } from '../../ui/helpers';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${space(1.5)} 1fr ${space(1.5)};
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100vh;

  ${media.min('tablet')`
    grid-template-areas:
      'sidenav header'
      'sidenav main'
      'sidenav footer';
    grid-template-columns: 240px 1fr;
  `}
`;

const MenuIcon = styled.button`
  align-items: center;
  background-color: #dadae3;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  left: 10px;
  padding: 12px;
  position: fixed;
  top: 5px;
  z-index: 1;
`;

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  grid-area: header;
  justify-content: space-between;
  padding: ${space(0.5)};
`;

const AsideContainer = styled.aside<{ isActive?: boolean }>`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  grid-area: sidenav;
  height: 100%;
  overflow-y: auto;
  padding: ${space(1.5)} ${space(0.5)} ${space(0.5)};
  position: fixed;
  transform: translateX(-245px);
  transition: all 0.6s ease-in-out;
  width: 240px;
  z-index: 2;
  ${props => props.isActive && 'transform: translateX(0);'};

  ${media.min('tablet')`
    position: relative;
    transform: translateX(0);
  `}
`;

const AsideClose = styled.button`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 8px;
  visibility: visible;

  ${media.min('tablet')`
    display: none;
  `}
`;

const MainContainer = styled.main`
  grid-area: main;
  overflow-y: auto;
  padding: ${space(0.5)};
`;

const FooterContainer = styled.footer`
  align-items: center;
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  grid-area: footer;
  justify-content: space-between;
  padding: ${space(0.5)};
`;

export {
  AsideClose,
  AsideContainer,
  Container,
  FooterContainer,
  HeaderContainer,
  MainContainer,
  MenuIcon
};
