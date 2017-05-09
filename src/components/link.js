import { Link as ReactRouterLink } from 'react-router';
import styled from 'styled-components';

const Link = styled(ReactRouterLink)`
  color: ${props => props.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Link;
