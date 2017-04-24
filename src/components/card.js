import { createElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import Layout from '../components/layout';
import theme from '../theme';
import { transitionLong } from '../transitions';

const styledDivOrLink = styled(props => {
  const tag = props.to ? Link : 'div';
  const { withHoverEffect, ...allowedProps } = props;
  return createElement(tag, allowedProps, props.children);
});

const Card = styledDivOrLink`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: ${theme.white};
  color: ${theme.black};
  border-radius: 3px;
  box-shadow: ${theme.boxShadow};
  padding: 20px;

  ${props => props.withHoverEffect && `
    transition: ${transitionLong};

    &:hover {
      cursor: pointer;
      transform: translate3d(0, -4px, 0);
      box-shadow: ${theme.boxShadowDark};
    }
  `}
`;

export default Card;
