import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { rem } from 'polished';

import { Icon, InlineBlock, Label, theme } from './index';

const Square = glamorous(InlineBlock, {
  filterProps: ['checked', 'disabled'],
})(
  {
    width: rem(20),
    height: rem(20),
    border: '1px solid',
    borderRadius: rem(2),
  },
  props => ({
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    borderColor: props.disabled
      ? props.theme.disabledColor
      : props.theme.primaryColor,
  }),
);

const Checkmark = props => {
  return (
    <Square
      position="relative"
      role="checkbox"
      aria-checked={props.checked ? 'true' : 'false'}
      {...props}
    >
      {props.checked && (
        <Icon
          name="check"
          size={20}
          color={props.disabled ? theme.disabledColor : theme.primaryColor}
          position="absolute"
        />
      )}
    </Square>
  );
};

Checkmark.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

Checkmark.defaultProps = {
  disabled: false,
};

const Checkbox = props => {
  const { error, onToggle, checked, disabled, label } = props;
  return (
    <Label
      error={error}
      onClick={!disabled && onToggle}
      display="flex"
      alignItems="center"
      flexDirection="row"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      userSelect="none"
    >
      <Checkmark checked={checked} disabled={disabled} marginRight={rem(12)} />
      <InlineBlock>{label}</InlineBlock>
    </Label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func, // eslint-disable-line react/require-default-props
};

Checkbox.defaultProps = {
  disabled: false,
  error: false,
};

export default Checkbox;
