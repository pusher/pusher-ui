import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Label from './label';
import { colorVariant, pxToRem } from '../utils';
import { transitionShort } from '../transitions';

const inputColor = props =>
  props.error ? props.theme.negativeColor : props.theme.primaryColor;

export const inputStyles = css`
  position: relative;
  box-sizing: border-box;
  height: ${pxToRem(40)};
  padding: ${pxToRem(12)} ${pxToRem(18)};
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid ${props =>
    props.error ? props.theme.negativeColor : 'transparent'};
  ${props => props.raised && 'border: none;'}
  border-radius: 2px;
  background-color: transparent;
  outline: none;
  color: ${colorVariant(props => props.theme.primaryTextColor)};
  background-color: ${props => props.theme.lightGrey};
  ${props => props.raised && css`
    background-color: ${props.theme.white};
    box-shadow: ${props.theme.boxShadow1};
  `}
  transition:
    border-color ${transitionShort} ease,
    color ${transitionShort} ease;

  &::placeholder {
    font-family: inherit;
    color: ${props => props.theme.tertiaryTextColor};
  }

  &::selection {
    color: #fff;
    background-color: ${colorVariant(props => props.theme.primaryColor)};
  }

  &:focus {
    caret-color: ${colorVariant(props => props.theme.primaryColor)};
    box-shadow: 0 0 0 2px ${props => transparentize(0.7, inputColor(props))};
    ${props => props.raised && 'border: none;'}
  }

  &[disabled] {
    background-color: ${props => props.theme.darkGrey};
    border: 1px solid ${props => props.theme.darkGrey};
    color: ${props => props.theme.tertiaryTextColor};
    user-select: none;
    cursor: not-allowed;
  }
`;

const InputContainer = styled.input`${inputStyles}`;

function Input(props) {
  if (props.label) {
    return (
      <Label error={props.error}>
        {props.label}
        <InputContainer {...props} />
      </Label>
    );
  }
  return <InputContainer {...props} />;
}

Input.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  error: false,
  label: '',
};

export default Input;
