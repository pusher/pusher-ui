import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { darken, transparentize } from 'polished';

import { pxToRem } from '../utils';
import { transitionShort } from '../transitions';

const styledButtonOrLink = styled(props => {
  const tag = props.to ? Link : 'button';
  const { primary, secondary, danger, ...allowedProps } = props;
  return createElement(tag, allowedProps, props.children);
});

const buttonColor = props =>
  props.danger ? props.theme.negativeColor : props.theme.primaryColor;

const buttonColorHover = multiplier => props =>
  darken(multiplier, buttonColor(props));

const buttonColorFocus = props => transparentize(0.7, buttonColor(props));

const Button = styledButtonOrLink`
  display: inline-block;
  padding: ${pxToRem(12)} ${pxToRem(18)};
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  user-select: none;
  border: none;
  border-radius: 2px;
  white-space: nowrap;
  color: ${buttonColor};
  background-color: transparent;
  transition:
    color ${transitionShort} ease,
    background-color ${transitionShort} ease,
    border-color ${transitionShort} ease;

  &:hover {
    cursor: pointer;
    color: ${buttonColorHover(0.1)};
  }

  &:active {
    color: ${buttonColorHover(0.2)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${buttonColorFocus};
  }

  ${props =>
    props.primary &&
    css`
    color: #fff;
    background-color: ${buttonColor};

    &:hover {
      color: #fff;
      background-color: ${buttonColorHover(0.1)};
    }

    &:active {
      color: #fff;
      background-color: ${buttonColorHover(0.2)};
    }
  `}

  ${props =>
    props.secondary &&
    css`
    padding: ${pxToRem(11)(props)} ${pxToRem(17)(props)};
    border: 1px solid ${buttonColor};

    &:hover {
      background-color: ${buttonColor};
      color: #fff;
    }

    &:active {
      background-color: ${buttonColorHover(0.1)};
      border-color: ${buttonColorHover(0.1)};
      color: #fff;
    }
  `}

  &[disabled] {
    background-color: ${props => props.theme.disabledColor};
    color: ${props => props.theme.tertiaryTextColor};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
  to: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
};

export default Button;
