import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { padding, rem, transitions, transparentize } from 'polished';

import { Label } from './index';

export const inputStyles = [
  {
    position: 'relative',
    boxSizing: 'border-box',
    height: rem(40),
    ...padding(rem(12), rem(18)),
    fontFamily: 'inherit',
    fontSize: rem(16),
    outline: 'none',
    ...transitions('border-color .18s ease', 'color .18s ease'),
    '::placeholder': {
      fontFamily: 'inherit',
    },
    '::selection': {
      color: '#fff',
    },
  },
  ({ theme, error, raised }) => ({
    color: error ? theme.negativeColor : theme.primaryTextColor,
    border: raised
      ? 'none'
      : `1px solid ${error ? theme.negativeColor : 'transparent'}`,
    borderRadius: theme.borderRadius1,
    backgroundColor: raised ? theme.white : theme.lightGreyColor,
    boxShadow: raised && theme.boxShadow1,
    '::placeholder': {
      color: theme.tertiaryTextColor,
    },
    '::selection': {
      backgroundColor: error ? theme.negativeColor : theme.primaryColor,
    },
    ':focus': {
      caretColor: error ? theme.negativeColor : theme.primaryColor,
      boxShadow: `0 0 0 2px ${transparentize(
        0.7,
        error ? theme.negativeColor : theme.primaryColor,
      )}`,
    },
    '&[type="password"]': {
      lineHeight: 1,
    },
    '&[disabled]': {
      backgroundColor: theme.darkGreyColor,
      border: `1px solid ${theme.darkGreyColor}`,
      color: theme.tertiaryTextColor,
      userSelect: 'none',
      cursor: 'not-allowed',
    },
  }),
];

const InputContainer = glamorous('input', {
  propsAreCssOverrides: true,
  filterProps: ['error', 'raised'],
})(...inputStyles);

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
