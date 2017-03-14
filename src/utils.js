export function hexToRgba (hex, alpha) {
  let hexTmp = hex.replace('#', '');
  if (hexTmp.length === 3) {
    hexTmp = hexTmp.split('').map(char => `${char}${char}`).join('');
  }
  const r = parseInt(hexTmp.substring(0, 2), 16);
  const g = parseInt(hexTmp.substring(2, 4), 16);
  const b = parseInt(hexTmp.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
