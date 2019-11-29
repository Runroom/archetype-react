const colors = {
  primary500: '#005397',
  primary400: '#006dc7',
  primary300: '#0088f7',
  secondary500: '#e75152',
  secondary400: '#ea6869',
  secondary300: '#ef8b8c',
  complementary500: '#faad00',
  neutro900: '#1b1b1b',
  neutro800: '#2d2d2d',
  neutro700: '#3e3e3e',
  neutro600: '#505050',
  neutro500: '#616161',
  neutro400: '#7d8380',
  neutro300: '#a8acaa',
  neutro200: '#c5c8c6',
  neutro100: '#f1f1f1',
  black: '#000',
  white: '#fff'
};

const light = {
  button: colors.secondary500,
  buttonHover: colors.secondary400,
  buttonColor: colors.white,
  link: colors.primary500,
  linkActive: colors.primary300,
  linkHover: colors.primary300,
  loading: colors.complementary500,
  text: colors.neutro900,
  textLight: colors.neutro700,
  textLighter: colors.neutro500,
  background: colors.neutro100,
  footer: colors.neutro900
};

const dark = {
  button: colors.secondary400,
  buttonHover: colors.secondary500,
  buttonColor: colors.white,
  link: colors.primary300,
  linkActive: colors.primary500,
  linkHover: colors.primary500,
  loading: colors.complementary500,
  text: colors.neutro200,
  textLight: colors.neutro300,
  textLighter: colors.neutro400,
  background: colors.neutro900,
  footer: colors.black
};

export { colors, light, dark };
