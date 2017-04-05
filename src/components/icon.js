import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { icons } from './icon-set';


const SVG = styled.svg`
  fill: currentcolor;
  vertical-align: middle;
  color: ${props => props.color};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

function Icon (props) {
  const { name, size, ...other } = props;

  if (icons.indexOf(name) === -1) {
    // eslint-disable-next-line no-console
    console.warn(`${name} not found in iconset; no-op`);
    return null;
  }

  let width = size;
  let height = size;
  if (typeof size === 'string' && size.indexOf('x') > -1) {
    [width, height] = size.split('x');
  }

  const useTag = `<use xlink:href="#icon:${name}" />`;
  return (
    <SVG
      {...other}
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: useTag }}
    />
  );
}

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

SVG.propTypes = {
  color: PropTypes.string.isRequired,
  width: stringOrNumber.isRequired,
  height: stringOrNumber.isRequired,
};

SVG.defaultProps = {
  color: 'inherit',
  width: 24,
  height: 24,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: stringOrNumber,
};

Icon.defaultProps = {
  color: 'inherit',
  size: 24,
};


export default Icon;
