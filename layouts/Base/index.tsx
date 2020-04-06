import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import {
  AsideClose,
  AsideContainer,
  Container,
  FooterContainer,
  HeaderContainer,
  MainContainer,
  MenuIcon
} from './styles';

const Base = ({ children }) => (
  <Container>
    <MenuIcon></MenuIcon>
    <HeaderContainer>
      <Header />
    </HeaderContainer>

    <AsideContainer>
      <AsideClose></AsideClose>
      <Navigation></Navigation>
    </AsideContainer>

    <MainContainer>{children}</MainContainer>

    <FooterContainer>
      <Footer></Footer>
    </FooterContainer>
  </Container>
);

export default Base;
