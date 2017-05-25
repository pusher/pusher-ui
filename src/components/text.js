import styled from 'styled-components';

import { pxToRem } from '../utils';

const Text = styled.span`
  color: ${props => do {
    if (props.tertiary) {
      props.theme.tertiaryTextColor;
    } else if (props.secondary) {
      props.theme.secondaryTextColor;
    } else {
      props.theme.primaryTextColor;
    }
  }};
  font-size: ${props => do {
    if (props.size) {
      pxToRem(props.size);
    } else if (props.heading) {
      pxToRem(20);
    } else {
      pxToRem(16);
    }
  }};
  line-height: 1.4;
`;

export default Text;
