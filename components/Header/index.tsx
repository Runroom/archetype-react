import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import ThemeSwitcher from '../../svg/theme-switcher.svg';
import LocaleSwitcher from '../LocaleSwitcher';
import { Icon } from './styles';

const Header = props => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Icon onClick={() => toggleTheme()} as={ThemeSwitcher} />
      <LocaleSwitcher {...props} />
    </>
  );
};

export default Header;
