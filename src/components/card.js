import { createElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import { pxToRem } from '../utils';

const styledDivOrLink = styled(props => {
  const tag = props.to ? Link : 'div';
  const { withHoverEffect, ...allowedProps } = props;
  return createElement(tag, allowedProps, props.children);
});

const Card = styledDivOrLink`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: ${pxToRem(20)};
  box-shadow: ${props => props.theme.boxShadow1};
  border-radius: ${props => props.theme.borderRadius1}px;

  @media (min-width: ${props => props.theme.containerWidth - 1}px) {
    border-radius: ${props => props.theme.borderRadius2}px;
  }

  ${props => props.withHoverEffect && `
    transition: ${props.theme.transitionLong};

    &:hover {
      cursor: pointer;
      box-shadow: ${props.theme.boxShadow2};
      transform: translate3d(0, -4px, 0);
    }
  `}
`;

export default Card;
