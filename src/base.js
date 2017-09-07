import { css } from 'glamor';

export default function insertGlobalBaseStyles(theme) {
  css.global('html, body', {
    width: '100%',
    minHeight: '100vh',
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    color: theme.primaryTextColor,
    backgroundColor: theme.backgroundColor1,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  });

  css.global('*', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  });
}
