import React from 'react';
import { Link as ReactRouterLink } from 'react-router';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const RouterLink = glamorous(ReactRouterLink, {
  propsAreCssOverrides: true,
  filterProps: ['external'],
})(
  {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  ({ theme }) => ({
    color: theme.primaryColor,
  }),
);

const Link = props => {
  const { external, ...rest } = props;
  if (external) {
    return <RouterLink target="_blank" rel="noopener noreferrer" {...rest} />;
  }
  return <RouterLink {...props} />;
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
};

export default Link;
