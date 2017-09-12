import glamorous from 'glamorous';
import { rem } from 'polished';

import { Flex } from './index';

const Card = glamorous(Flex)(
  {
    flexDirection: 'column',
    padding: rem(20),
    backgroundColor: '#fff',
  },
  props => ({
    boxShadow: props.theme.boxShadow1,
    borderRadius: props.theme.borderRadius1,
  }),
);

export default Card;
