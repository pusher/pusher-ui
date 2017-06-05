const systemFontFamilies = [
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
]
  .map(name => `"${name}"`)
  .join(', ');

const systemMonoFontFamilies = [
  'SFMono-Regular',
  'Consolas',
  'Liberation Mono',
  'Menlo, Courier',
  'monospace',
]
  .map(name => `"${name}"`)
  .join(', ');

// Deprecated variables & values
export const white = '#fff';
export const black = '#1e1e1e';
export const grey = '#e7ebf3';
export const darkGrey = '#dfe0e2';
export const darkDarkGrey = '#989898';
export const lightGrey = '#eff4f7';
export const lightLightGrey = '#f7f9fa';
export const primary = '#549eff';
export const success = '#319a31';
export const warning = '#ffaf1c';
export const danger = '#ca0808';

export const fontSize = 16;
export const fontFamily = systemFontFamilies;
export const monoFontFamily = systemMonoFontFamilies;
export const transitionShort = '0.18s';
export const transitionLong = '0.36s';
export const primaryTextColor = '#2b303b';
export const secondaryTextColor = '#60646c';
export const tertiaryTextColor = '#95979d';
export const borderColor = '#cacbce';
export const disabledColor = '#dfe0e2';
export const primaryColor = '#006eff';
export const negativeColor = '#ff455c';
export const backgroundColor1 = '#f7f9fa';
export const backgroundColor2 = '#eff4f7';
export const boxShadow1 = '0 1px 2px 0 rgba(50, 52, 58, 0.15)';
export const boxShadow2 = '0 1px 4px 0 rgba(50, 52, 58, 0.14)';
export const boxShadow3 = '0 1px 4px 1px rgba(50, 52, 58, 0.13)';
export const borderRadius1 = 2;
export const borderRadius2 = 4;
export const containerWidth = 960;
export const zIndex1 = 1;
export const zIndex2 = 2;
