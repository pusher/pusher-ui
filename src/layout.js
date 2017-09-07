import glamorous from 'glamorous';
import { rem } from 'polished';
import PropTypes from 'prop-types';

const options = {
  propsAreCssOverrides: true,
};

const gutterStyles = props => {
  const cssRule = {
    column: 'marginBottom',
    row: 'marginRight',
  }[props.flexDirection];
  return {
    '> :not(:last-child)': {
      [cssRule]: rem(props.gutter || 0),
    },
  };
};

export const Block = glamorous('div', options)({
  display: 'block',
});

export const Flex = glamorous('div', {
  ...options,
  filterProps: ['gutter'],
})(
  {
    display: 'flex',
  },
  gutterStyles,
);

Flex.defaultProps = {
  flexDirection: 'row',
};

Flex.propTypes = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const Inline = glamorous('div', options)({
  display: 'inline',
});

export const InlineBlock = glamorous('div', options)({
  display: 'inline-block',
});
