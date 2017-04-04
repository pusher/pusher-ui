import styled from 'styled-components';

import { Layout } from '../../index';


const LayoutWrapper = styled(Layout)`
  width: 300px;
  height: 200px;
  background-color: ${props => props.theme.grey};
`;


export default LayoutWrapper;
