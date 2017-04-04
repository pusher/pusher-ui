import React, { PropTypes } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';

import { Code, Layout } from '../../index';


function renderJsx (component, name, filterProps) {
  const displayName = name && (() => name);
  return reactElementToJSXString(component, {
    filterProps,
    displayName,
  });
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  border-bottom: 1px solid ${props => props.theme.grey};
`;

const castArray = items => Array.isArray(items) ? items : [items];

function CodeWrapper (props) {
  const { children, name } = props;
  return (
    <Layout flex>
      {castArray(children).map((child, index) => (
        <Row key={index}>
          <Layout block>{children}</Layout>
          <Layout block>
            <Code language="javascript">{renderJsx(child, name, props.filter)}</Code>
          </Layout>
        </Row>
      ))}
    </Layout>
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
