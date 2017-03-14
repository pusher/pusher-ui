import React from 'react';
import styled from 'styled-components';

import { hexToRgba } from './utils';
import { transitionShort, transitionLong } from './transitions';


const BaseButton = styled.button`
  display: inline-block;
  padding: ${props => ({
    small: '.4em .8em',
    large: '.6em 1.2em',
  })[props.size] || '.5em 1em'};
  font-size: 1em;
  font-family: ${props => props.theme.fontFamily};
  user-select: none;
  text-decoration: none;
  border: 1px solid;
  border-radius: 3px;
  border-color: ${props => props.theme.darkDarkGrey};
  color: ${props => hexToRgba(props.theme.black, 0.8)};
  background-color: ${props => props.theme.white};
  transition:
    color ${transitionLong} ease,
    filter ${transitionShort} ease;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.black};
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
    color: ${props => props.theme.black};
    cursor: not-allowed;
  }
`;

// Create a variant of the base button based on the theme.
function createButtonVariant (variant) {
  return styled(BaseButton)`
    border-color: ${props => props.theme[variant]};
    color: ${props => hexToRgba(props.theme.white, 0.8)};
    background-color: ${props => props.theme[variant]};

    &:hover {
      color: ${props => props.theme.white};
    }
  `;
}

const PrimaryButton = createButtonVariant('primary');
const SuccessButton = createButtonVariant('success');
const WarningButton = createButtonVariant('warning');
const DangerButton = createButtonVariant('danger');

const Button = props => {
  if (props.primary) {
    return <PrimaryButton {...props} />;
  } else if (props.success) {
    return <SuccessButton {...props} />;
  } else if (props.warning) {
    return <WarningButton {...props} />;
  } else if (props.danger) {
    return <DangerButton {...props} />;
  }
  return <BaseButton {...props} />;
};


export default Button;
