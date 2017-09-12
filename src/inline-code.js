import glamorous from 'glamorous';
import { padding, rem } from 'polished';

const InlineCode = glamorous('code', { propsAreCssOverrides: true })(
  {
    fontSize: rem(14),
    ...padding(rem(1), rem(3), rem(3)),
  },
  ({ theme }) => ({
    fontFamily: theme.monoFontFamily,
    backgroundColor: theme.lightGreyColor,
    borderRadius: theme.borderRadius1,
  }),
);

export default InlineCode;
