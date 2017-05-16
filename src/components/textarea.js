import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from './label';
import { inputStyles } from './input';

const TextareaContainer = styled.textarea`
  ${inputStyles};
  height: inherit;
`;

function Textarea(props) {
  if (props.label) {
    return (
      <Label error={props.error}>
        {props.label}
        <TextareaContainer {...props} />
      </Label>
    );
  }
  return <TextareaContainer {...props} />;
}

Textarea.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
};

Textarea.defaultProps = {
  error: false,
  label: '',
};

export default Textarea;
