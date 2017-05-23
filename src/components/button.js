import { createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';

import { pxToRem } from '../utils';
import { transitionShort } from '../transitions';

const styledButtonOrLink = styled(props => {
  const tag = props.to ? Link : 'button';
  const { primary, secondary, ...allowedProps } = props;
  return createElement(tag, allowedProps, props.children);
});

const Button = styledButtonOrLink`
  display: inline-block;
  padding: ${pxToRem(12)} ${pxToRem(18)};
  font-family: inherit;
  font-size: inherit;
  line-height: ${pxToRem(16)};
  user-select: none;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 2px;
  white-space: nowrap;
  color: ${props => (props.danger ? props.theme.negativeColor : props.theme.primaryColor)};
  background-color: transparent;
  border-color: ${props => (props.danger ? props.theme.negativeColor : props.theme.primaryColor)};
  transition:
    color ${transitionShort} ease,
    background-color ${transitionShort} ease,
    border-color ${transitionShort} ease,
    opacity ${transitionShort} ease;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: ${props => (props.danger ? props.theme.negativeColor : props.theme.primaryColor)};
  }

  &:active {
    opacity: .85;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &[disabled] {
    background-color: ${props => props.theme.borderColor};
    border: 1px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.tertiaryTextColor};
    cursor: not-allowed;
  }

  &[disabled]:hover {
    opacity: 1;
  }

  ${props => (props.primary || props.secondary) && css`
    padding: ${pxToRem(11)(props)} ${pxToRem(17)(props)};
    border: 1px solid;
    border-color: ${props.danger ? props.theme.negativeColor : props.theme.primaryColor};
  `}

  ${props => props.primary && css`
    color: #fff;
    background-color: ${props.danger ? props.theme.negativeColor : props.theme.primaryColor};

    &:hover {
      color: ${props.danger ? props.theme.negativeColor : props.theme.primaryColor};
      background-color: transparent;
    }
  `}

  ${props => props.secondary && css`
    background-color: transparent;
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
};

export default Button;
