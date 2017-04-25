import { createElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import { black, boxShadow, boxShadowDark, white } from '../theme';
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
  background-color: ${white};
  color: ${black};
  border-radius: 3px;
  box-shadow: ${boxShadow};
  padding: 20px;

  ${props => props.withHoverEffect && `
    transition: ${transitionLong};

    &:hover {
      cursor: pointer;
      transform: translate3d(0, -4px, 0);
      box-shadow: ${boxShadowDark};
    }
  `}
`;

export default Card;
