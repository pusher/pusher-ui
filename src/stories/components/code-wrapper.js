import React, { PropTypes } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';


const CodeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function renderJsx (component, name) {
  return reactElementToJSXString(component, {
    displayName: () => name,
  });
}

function CodeWrapper (props) {
  const items = Array.isArray(props.children) ? props.children : [props.children];
  return (
    <div>
      {items.map(child => (
        <CodeContainer>
          <div>{child}</div>
          <pre>{renderJsx(child, props.name)}</pre>
        </CodeContainer>
      ))}
    </div>
  );
}

CodeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};


export default CodeWrapper;
