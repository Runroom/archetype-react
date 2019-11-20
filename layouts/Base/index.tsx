import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Base = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Base;
