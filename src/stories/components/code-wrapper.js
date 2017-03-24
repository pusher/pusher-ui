import React, { PropTypes } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';

import { Code } from '../../index';


const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function renderJsx (component, name, filterProps) {
  const displayName = name && (() => name);
  return reactElementToJSXString(component, {
    filterProps,
    displayName,
  });
}

const castArray = items => Array.isArray(items) ? items : [items];

function CodeWrapper (props) {
  const { children, name } = props;
  return (
    <div>
      {castArray(children).map((child, index) => (
        <CodeContainer key={index}>
          <div>{child}</div>
          <Code language="javascript">{renderJsx(child, name, props.filter)}</Code>
        </CodeContainer>
      ))}
    </div>
  );
}

CodeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string, // eslint-disable-line react/require-default-props
  filter: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

CodeWrapper.defaultProps = {
  filter: [],
};


export default CodeWrapper;
