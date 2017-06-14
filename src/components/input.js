import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Label from './label';
import { colorVariant, pxToRem } from '../utils';
import { transitionShort } from '../transitions';

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
  background-color: ${props => (props.raised ? '#fff' : props.theme.lightGrey)};
  box-shadow: ${props => (props.raised ? props.theme.boxShadow1 : 'none')};
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
    border: 1px solid ${colorVariant(props => props.theme.primaryColor)};
    ${props => props.raised && 'border: none;'}
  }

  &[disabled] {
    background-color: ${props => props.theme.borderColor};
    border: 1px solid ${props => props.theme.borderColor};
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
