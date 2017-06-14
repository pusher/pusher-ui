import React from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled, { css } from 'styled-components';

import { Code, Layout } from '../../index';

function renderJsx(component, name, filterProps) {
  const displayName = ({ type }) => {
    if (typeof type === 'string') {
      return type;
    } else if (typeof type === 'function') {
      if (name && type.name === 'StyledComponent') {
        return name;
      }
      return type.name;
    }
    return type.displayName;
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

const Container = styled(Layout)`
  ${props => props.onWhite && css`
    box-shadow: 0 1px 2px 0 rgba(50, 52, 58, 0.15);
    background-color: #fff;
    border-radius: 2px;
    padding: 12px;
  `};
`;

const castArray = items => (Array.isArray(items) ? items : [items]);

function CodeWrapper(props) {
  const { children, name, onWhite } = props;
  return (
    <Layout flex>
      {castArray(children).map((child, index) => (
        <Row key={index}>
          <Container onWhite={onWhite} block>{children}</Container>
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
  onWhite: PropTypes.bool,
};

CodeWrapper.defaultProps = {
  filter: [],
  onWhite: false,
};

export default CodeWrapper;
