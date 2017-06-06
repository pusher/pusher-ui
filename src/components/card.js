import styled, { css } from 'styled-components';

import Layout from './layout';
import { pxToRem } from '../utils';

const Card = styled(Layout)`
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(20)};
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow1};
  border-radius: ${props => props.theme.borderRadius1}px;

  ${props =>
    props.padding != null &&
    css`
    padding: ${pxToRem(props.padding)};
  `}

  @media (min-width: ${props => props.theme.containerWidth - 1}px) {
    border-radius: ${props => props.theme.borderRadius2}px;
  }
`;

export default Card;
