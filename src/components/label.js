import styled from 'styled-components';

import { colorVariant, pxToRem } from '../utils';
import allHelpers from '../helpers';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${colorVariant(props => props.theme.tertiaryTextColor)};
  font-size: ${pxToRem(12)};
  letter-spacing: ${pxToRem(1)};
  text-transform: uppercase;

  input,
  textarea {
    margin-top: ${pxToRem(6)};
  }

  ${allHelpers}
`;

export default Label;
