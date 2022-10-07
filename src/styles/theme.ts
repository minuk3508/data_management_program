import { DefaultTheme } from 'styled-components';

const fontWeight = {
  light: '300',
  regular: '400',
  regular_2: '500',
  bold: '700',
  black: '900',
};
const colors = {
  black: '#2D2D2D',
};
const device = {
  mobileS: `only screen and (max-width: 290px)`,
  mobile: `only screen and (max-width: 450px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};
const theme: DefaultTheme = {
  fontWeight,
  colors,
  device,
};

export default theme;
