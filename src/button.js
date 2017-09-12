import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { darken, transparentize, rem } from 'polished';

function colorVariant(props) {
  let color = props.theme.primaryColor;
  let backgroundColor = 'transparent';
  let borderColor = props.theme.primaryColor;

  if (props.primary) {
    color = props.theme.whiteColor;
    if (props.success) {
      backgroundColor = props.theme.positiveColor;
      borderColor = props.theme.positiveColor;
    } else if (props.danger) {
      backgroundColor = props.theme.negativeColor;
      borderColor = props.theme.negativeColor;
    } else if (props.warning) {
      backgroundColor = props.theme.warningColor;
      borderColor = props.theme.warningColor;
    } else {
      backgroundColor = props.theme.primaryColor;
      borderColor = props.theme.primaryColor;
    }
  } else if (props.success) {
    color = props.theme.positiveColor;
    borderColor = props.theme.positiveColor;
  } else if (props.danger) {
    color = props.theme.negativeColor;
    borderColor = props.theme.negativeColor;
  } else if (props.warning) {
    color = props.theme.warningColor;
    borderColor = props.theme.warningColor;
  }
  return { color, backgroundColor, borderColor };
}

const Button = glamorous('button', {
  propsAreCssOverrides: true,
  filterProps: ['primary', 'success', 'warning', 'danger'],
})(
  {
    position: 'relative',
    display: 'inline-block',
    margin: 0,
    padding: `${rem(12)} ${rem(18)}`,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
    lineHeight: 1,
    userSelect: 'none',
    whiteSpace: 'nowrap',
    backgroundColor: 'transparent',
    transition:
      'color .18s ease, background-color .18s ease, border-color .18s ease',
  },
  props => {
    const { color, backgroundColor, borderColor } = colorVariant(props);
    return {
      color,
      backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius: props.theme.borderRadius1,

      '&:hover': {
        cursor: 'pointer',
        color: darken(0.05, color),
      },

      '&:active': {
        color: props.primary ? color : props.theme.whiteColor,
        backgroundColor: props.primary ? darken(0.1, backgroundColor) : color,
      },

      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${transparentize(0.7, color)}`,
      },

      '&[disabled]': {
        backgroundColor: props.theme.disabledColor,
        color: props.theme.tertiaryTextColor,
        borderColor: 'transparent',
        cursor: 'not-allowed',

        '&:before': {
          border: `2px solid ${props.theme.tertiaryTextColor}`,
        },
      },
    };
  },
);

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
};

export default Button;
