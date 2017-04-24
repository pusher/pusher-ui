import React from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components';

import { Code, Layout } from '../../index';

function renderJsx(component, name, filterProps) {
  const displayName = component => {
    const { type } = component;

    if (typeof type === 'string') {
      return type;
    } else if (typeof type === 'function') {
      if (name && type.name === 'StyledComponent') {
        return name;
      } else {
        return type.name;
      }
    } else {
      return component.type.displayName;
    }
  };

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

const castArray = items => (Array.isArray(items) ? items : [items]);

function CodeWrapper(props) {
  const { children, name } = props;
  return (
    <Layout flex>
      {castArray(children).map((child, index) => (
        <Row key={index}>
          <Layout block>{children}</Layout>
          <Layout block>
            <Code language="javascript">
              {renderJsx(child, name, props.filter)}
            </Code>
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
