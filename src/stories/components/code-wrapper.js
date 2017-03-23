import React, { PropTypes } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';


const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function renderJsx (component, name) {
  const displayName = name && (() => name);
  return reactElementToJSXString(component, { displayName });
}

function CodeWrapper (props) {
  const items = Array.isArray(props.children) ? props.children : [props.children];
  return (
    <div>
      {items.map((child, index) => (
        <CodeContainer key={index}>
          <div>{child}</div>
          <pre>{renderJsx(child, props.name)}</pre>
        </CodeContainer>
      ))}
    </div>
  );
}

CodeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string, // eslint-disable-line react/require-default-props
};


export default CodeWrapper;
