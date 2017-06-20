import React from 'react';
import { Link as ReactRouterLink } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Component = styled(ReactRouterLink)`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

function Link(props) {
  const { external, ...other } = props;
  return (
    <Component
      target={external && '_blank'}
      rel={external && 'noopener noreferrer'}
      {...other}
    />
  );
}

Link.propTypes = {
  external: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
};

export default Link;
