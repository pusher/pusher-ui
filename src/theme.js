const createFontNames = fonts =>
  fonts.map(name => (name.match(/\s/) ? `"${name}"` : name)).join(', ');

const systemFontFamilies = createFontNames([
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
]);

const systemMonoFontFamilies = createFontNames([
  'SFMono-Regular',
  'Consolas',
  'Liberation Mono',
  'Menlo',
  'Courier',
  'monospace',
]);

/* Global defaults */
export const fontSize = 16;
export const fontFamily = `Roboto, ${systemFontFamilies}`;
export const monoFontFamily = `"Roboto Mono", ${systemMonoFontFamilies}`;
export const backgroundColor1 = '#f7f9fa';

/* General colors */
export const whiteColor = '#fff';
export const blackColor = '#1e1e1e';
export const darkGreyColor = '#dfe0e2';
export const lightGreyColor = '#eff4f7';
export const lightLightGreyColor = '#f7f9fa';
export const disabledColor = '#dfe0e2';

/* Variant colors (primary, success, etc) */
export const primaryColor = '#006eff';
export const negativeColor = '#ff455c';
export const positiveColor = '#00D08D';
export const warningColor = '#ffaf1c';

/* Typography colors */
export const primaryTextColor = '#2b303b';
export const secondaryTextColor = '#60646c';
export const tertiaryTextColor = '#95979d';

/* Scale */
export const zIndex0 = 0;
export const zIndex1 = 1;
export const zIndex2 = 2;

/* Misc */
export const borderRadius1 = 2;
export const boxShadow1 = '0 1px 2px 0 rgba(50, 52, 58, 0.15)';
export const boxShadow2 = '0 1px 4px 0 rgba(50, 52, 58, 0.14)';
export const boxShadow3 = '0 1px 4px 1px rgba(50, 52, 58, 0.13)';
