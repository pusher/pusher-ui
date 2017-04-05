const fontFamilies = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
].map(name => `"${name}"`).join(', ');


export const fontFamily = fontFamilies;
export const white = '#fff';
export const black = '#1e1e1e';
export const grey = '#e7ebf3';
export const darkGrey = '#d6d6d6';
export const darkDarkGrey = '#989898';
export const lightGrey = '#e7ebf3';
export const primary = '#549eff';
export const success = '#319a31';
export const warning = '#ffaf1c';
export const danger = '#ca0808';
export const zIndex1 = 1;
export const zIndex2 = 2;
export default {
  fontFamily,
  white,
  black,
  grey,
  darkGrey,
  darkDarkGrey,
  lightGrey,
  primary,
  success,
  warning,
  danger,
  zIndex1,
  zIndex2,
};
