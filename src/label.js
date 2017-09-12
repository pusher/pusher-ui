import glamorous from 'glamorous';
import { rem } from 'polished';

const Label = glamorous('label', {
  propsAreCssOverrides: true,
  filterProps: ['error'],
})(
  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: rem(12),
    letterSpacing: rem(1),
    textTransform: 'uppercase',
    '& input, textarea': {
      marginTop: rem(6),
    },
  },
  ({ error, theme }) => ({
    color: error ? theme.negativeColor : theme.tertiaryTextColor,
  }),
);

export default Label;
