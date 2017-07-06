import styled from 'styled-components';

import { pxToRem } from '../utils';

const InlineCode = styled.code`
  font-family: ${props => props.theme.monoFontFamily};
  padding: ${pxToRem(3)} ${pxToRem(6)};
  background-color: ${props => props.theme.lightGrey};
  border-radius: ${props => props.theme.borderRadius1}px;
`;

export default InlineCode;
