import { css } from 'styled-components';

const UPPERCASE = /([A-Z])/g;

function camelCaseToKebabCase(string) {
  return string.replace(UPPERCASE, match => `-${match[0].toLowerCase()}`);
}

function wrapValue(props, name) {
  const wrapNumberOrString = (value, fontSize) => {
    if (Number.isInteger(value)) {
      return `${value / fontSize}rem`;
    } else if (props.theme[value]) {
      return props.theme[value];
    }
    return value;
  };

  const value = props[name];
  if (value === true) {
    return null;
  }

  const fontSize = props.fontSize || props.theme.fontSize;
  return value instanceof Array
    ? value.map(val => wrapNumberOrString(val, fontSize)).join(' ')
    : wrapNumberOrString(value, fontSize);
}

// Given a camelcased property name, return a simple helper handling single or
// array values of strings or numbers.
const createHelper = name => props =>
  props[name] &&
  css`
  ${camelCaseToKebabCase(name)}: ${wrapValue(props, name)};
`;

export const color = createHelper('color');
export const backgroundColor = createHelper('backgroundColor');
export const padding = createHelper('padding');
export const margin = createHelper('margin');
export const fontSize = createHelper('fontSize');
export const width = createHelper('width');
export const height = createHelper('height');
export default css`
  ${color}
  ${backgroundColor}
  ${padding}
  ${margin}
  ${fontSize}
  ${width}
  ${height}
`;
