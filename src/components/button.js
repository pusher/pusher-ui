import { PropTypes, createElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import { hexToRgba, getVariant } from '../utils';
import { transitionShort, transitionLong } from '../transitions';


const styledButtonOrLink = styled((props) => {
  const tag = props.to ? Link : 'button';
  const {
    primary,
    success,
    warning,
    danger,
    large,
    small,
    ...allowedProps,
  } = props;
  return createElement(tag, allowedProps, props.children);
});

const Button = styledButtonOrLink`
  display: inline-block;
  padding: .5em 1em;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => ({
    small: '0.8em',
    large: '1.2em',
  })[props.size] || '1em'};
  user-select: none;
  text-decoration: none;
  border: 1px solid;
  border-radius: 3px;
  white-space: nowrap;
  color: ${props => hexToRgba(getVariant(props) ? props.theme.white : props.theme.black, 0.8)};
  border-color: ${props => getVariant(props) || props.theme.darkDarkGrey};
  background-color: ${props => getVariant(props) || props.theme.white};
  transition:
    color ${transitionLong} ease,
    filter ${transitionShort} ease;

  &:hover {
    cursor: pointer;
    color: ${props => getVariant(props) ? props.theme.white : props.theme.black};
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(95%);
  }

  &:active,
  &:focus {
    outline: none;
  }

  &[disabled] {
    border-color: ${props => props.theme.darkGrey};
    background-color: ${props => props.theme.darkGrey};
    color: ${props => hexToRgba(props.theme.black, 0.5)};
    cursor: not-allowed;
  }

  &[disabled]:hover {
    background-color: ${props => props.theme.darkGrey};
    filter: none;
  }
`;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
  to: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
};


export default Button;
