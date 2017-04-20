import styled from 'styled-components';

import { Layout } from '../../index';

const LayoutItem = styled(Layout)`
  margin: 5px;
  padding: 5px;
  background-color: ${props => props.theme.white};
`;

export default LayoutItem;
