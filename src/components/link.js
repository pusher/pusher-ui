import { Link as ReactRouterLink } from 'react-router';
import styled from 'styled-components';

import allHelpers from '../helpers';

const Link = styled(ReactRouterLink)`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${allHelpers}
`;

export default Link;
