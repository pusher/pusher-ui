import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';


const shared = css`
  font-size: 14px;
  outline: none;
  &[disabled] {
    background-color: ${props => props.theme.lightGrey};
  }
`;

const Input = styled.input`
  ${shared}
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.grey};
`;

const Textarea = styled.textarea`
  ${shared}
  padding: 5px;
  border: 1px solid ${props => props.theme.grey};
`;

function TextField (props) {
  const { multi, ...other } = props;
  return multi ? <Textarea {...other} /> : <Input {...other} />;
}

TextField.propTypes = {
  multi: PropTypes.bool,
};

TextField.defaultProps = {
  multi: false,
};


export default TextField;
