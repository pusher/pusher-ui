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

export default {
  fontSize: '16px',
  fontFamily: fontFamilies,
  white: '#fff',
  black: '#1e1e1e',
  darkGrey: '#d6d6d6',
  darkDarkGrey: '#989898',
  lightGrey: '#e7ebf3',
  primary: '#549eff',
  success: '#319a31',
  warning: '#ffaf1c',
  danger: '#ca0808',
};
