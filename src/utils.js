export function hexToRgba(hex, alpha) {
  let hexTmp = hex.replace('#', '');
  if (hexTmp.length === 3) {
    hexTmp = hexTmp.split('').map(char => `${char}${char}`).join('');
  }
  const r = parseInt(hexTmp.substring(0, 2), 16);
  const g = parseInt(hexTmp.substring(2, 4), 16);
  const b = parseInt(hexTmp.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getVariant(props) {
  const variants = ['primary', 'success', 'warning', 'danger'];
  return props.theme[variants.find(variant => !!props[variant])];
}

export function colorVariant(defaultColorFunc) {
  return props =>
    props.error ? props.theme.negativeColor : defaultColorFunc(props);
}

export function copyToClipboard(text) {
  const { scrollTop } = document.body;
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  // Reset the scroll position to the initial value, since appending to the
  // document may change the scroll position.
  window.scrollTo(0, scrollTop);
}

export function download(text, filename) {
  const element = document.createElement('a');
  const content = encodeURIComponent(text);
  element.setAttribute('href', `data:text/plain;charset=utf-8,${content}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

export function pxToRem(pixels) {
  const px = typeof pixels === 'string' ? parseInt(pixels, 10) : pixels;
  return props => `${px / props.theme.fontSize}rem`;
}
