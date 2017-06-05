import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { darken } from 'polished';

import { pxToRem } from '../utils';
import { transitionShort } from '../transitions';
import { primaryColor, disabledColor, tertiaryTextColor, negativeColor } from '../theme';

const styledButtonOrLink = styled(props => {
  const tag = props.to ? Link : 'button';
  const { primary, secondary, danger, ...allowedProps } = props;
  return createElement(tag, allowedProps, props.children);
});

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
  color: ${primaryColor};
  background-color: transparent;
  transition:
    color ${transitionShort} ease,
    background-color ${transitionShort} ease,
    border-color ${transitionShort} ease;

  &:hover {
    cursor: pointer;
    color: ${darken(.1, primaryColor)};
  }

  &:active {
    color: ${darken(.2, primaryColor)};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    background-color: ${disabledColor};
    border: 1px solid ${disabledColor};
    color: ${tertiaryTextColor};
    cursor: not-allowed;
  }

  ${props => props.primary && css`
    color: #fff;
    background-color: ${primaryColor};

    &:hover {
      color: #fff;
      background-color: ${darken(.1, primaryColor)};
    }

    &:active {
      color: #fff;
      background-color: ${darken(.2, primaryColor)};
    }
  `}

  ${props => props.secondary && css`
    padding: ${pxToRem(11)(props)} ${pxToRem(17)(props)};
    border: 1px solid ${primaryColor};

    &:hover {
      background-color: ${primaryColor};
      color: #fff;
    }

    &:active {
      background-color: ${darken(.1, primaryColor)};
      border-color: ${darken(.1, primaryColor)};
      color: #fff;
    }
  `}

  ${props => props.danger && css`
    padding: ${pxToRem(11)(props)} ${pxToRem(17)(props)};
    border: 1px solid ${negativeColor};
    color: ${negativeColor};

    &:hover {
      background-color: ${negativeColor};
      color: #fff;
    }

    &:active {
      background-color: ${darken(.1, negativeColor)};
      border-color: ${darken(.1, negativeColor)};
      color: #fff;
    }
  `}
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
