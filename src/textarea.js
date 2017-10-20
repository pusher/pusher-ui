import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { Label } from './index';
import { inputStyles } from './input';

const Container = glamorous('textarea', {
  propsAreCssOverrides: true,
  filterProps: ['error', 'raised', 'label'],
})(inputStyles, {
  height: 'inherit',
});

function Textarea(props) {
  if (props.label) {
    return (
      <Label error={props.error}>
        {props.label}
        <Container {...props} value={props.value == null ? '' : props.value} />
      </Label>
    );
  }
  return (
    <Container {...props} value={props.value == null ? '' : props.value} />
  );
}

Textarea.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  error: false,
  label: '',
};

export default Textarea;
