import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { darkDarkGrey, grey, lightGrey } from '../theme';

const shared = css`
  font-size: 14px;
  outline: none;
  &[disabled] {
    background-color: ${lightGrey};
  }
`;

const Input = styled.input`
  ${shared}
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid ${grey};
`;

const Textarea = styled.textarea`
  ${shared}
  padding: 5px;
  border: 1px solid ${grey};
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${darkDarkGrey};
  text-transform: uppercase;
  font-size: 0.8em;
`;

function TextField(props) {
  const { multi, label, ...other } = props;
  const component = multi ? <Textarea {...other} /> : <Input {...other} />;

  if (label) {
    return (
      <Label>
        {label}
        {component}
      </Label>
    );
  }

  return component;
}

TextField.propTypes = {
  multi: PropTypes.bool,
  label: PropTypes.string,
};

TextField.defaultProps = {
  multi: false,
  label: '',
};

export default TextField;
