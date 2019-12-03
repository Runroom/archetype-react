// import { act } from '@testing-library/react';
import { colors, dark } from '../config/theme';
import settings from '../config/settings.json';

const THEME = {
  colors: dark,
  palette: colors,
  toggleTheme: jest.fn(),
  settings
};

export default THEME;
