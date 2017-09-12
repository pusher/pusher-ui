import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import glamorous from 'glamorous';
import { padding, rem } from 'polished';

import { Block, Inline, colorVariant } from './index';

const tooltipStyles = props => {
  if (props.position === 'top') {
    return {
      top: '100%',
      left: '50%',
      marginLeft: '-5px',
      borderTop: `solid 5px ${props.theme.primaryColor}`,
      borderBottom: 'none',
    };
  } else if (props.position === 'right') {
    return {
      top: '50%',
      left: '-5px',
      marginTop: '-5px',
      borderRight: `solid 5px ${props.theme.primaryColor}`,
      borderLeft: 'none',
    };
  } else if (props.position === 'bottom') {
    return {
      top: '-5px',
      left: '50%',
      marginLeft: '-5px',
      borderBottom: `solid 5px ${props.theme.primaryColor}`,
      borderTop: 'none',
    };
  } else if (props.position === 'left') {
    return {
      top: '50%',
      left: '100%',
      marginTop: '-5px',
      borderRight: 'none',
    };
  }
  return {};
};

const TooltipBubble = glamorous('div')(
  {
    position: 'absolute',
    ...padding(rem(6), rem(12)),
    fontSize: rem(14),
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transition: 'opacity .18s',
    '&::after': {
      content: '',
      position: 'absolute',
      width: 0,
      height: 0,
      border: 'solid 5px transparent',
    },
  },
  props => {
    let backgroundColor = colorVariant(props);
    if (backgroundColor === props.theme.whiteColor) {
      backgroundColor = props.theme.primaryColor;
    }
    return {
      color: props.theme.whiteColor,
      backgroundColor,
      borderRadius: props.theme.borderRadius1,
      zIndex: props.visible ? props.theme.zIndex1 : props.theme.zIndex0,
      opacity: props.visible ? 1 : 0,
      '&::after': {
        ...tooltipStyles(props),
      },
    };
  },
);

const sharedPropTypes = {
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
};

TooltipBubble.propTypes = {
  ...sharedPropTypes,
  visible: PropTypes.bool,
};

class Tooltip extends Component {
  static propTypes = {
    ...sharedPropTypes,
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    timeout: PropTypes.number,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    position: 'top',
    timeout: 80,
    isOpen: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
  }

  componentDidMount() {
    const offsets = this.calculateOffsets();
    offsets.offsetLeft += offsets.x;
    offsets.offsetTop += offsets.y;
    this.setState({ ...offsets });
  }

  onMouseEnter = () => {
    this.hovering = true;
    setTimeout(() => {
      if (!this.props.isOpen && this.hovering) {
        this.setState({ isOpen: true, ...this.calculateOffsets() });
      }
    }, this.props.timeout);
  };

  onMouseLeave = () => {
    this.hovering = false;
    if (!this.props.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  calculateOffsets = () => {
    const offsetWidth = (this.child.offsetWidth - this.tooltip.offsetWidth) / 2;
    const offsetHeight =
      (this.child.offsetHeight - this.tooltip.offsetHeight) / 2;

    switch (this.props.position) {
      case 'right':
        return {
          x: 10,
          y: 0,
          offsetLeft: this.child.offsetWidth,
          offsetTop: offsetHeight,
        };
      case 'bottom':
        return {
          x: 0,
          y: 10,
          offsetLeft: offsetWidth,
          offsetTop: this.child.offsetHeight,
        };
      case 'left':
        return {
          x: -10,
          y: 0,
          offsetLeft: -this.tooltip.offsetWidth,
          offsetTop: offsetHeight,
        };
      default:
        return {
          x: 0,
          y: -10,
          offsetLeft: offsetWidth,
          offsetTop: -this.tooltip.offsetHeight,
        };
    }
  };

  render() {
    return (
      <Block position="relative">
        <Motion
          style={{
            x: spring(this.state.isOpen ? this.state.x : 0),
            y: spring(this.state.isOpen ? this.state.y : 0),
          }}
        >
          {({ x, y }) => (
            <TooltipBubble
              innerRef={c => (this.tooltip = c)}
              position={this.props.position}
              visible={this.state.isOpen || this.props.isOpen}
              success={this.props.success}
              warning={this.props.warning}
              danger={this.props.danger}
              style={{
                left: this.state.offsetLeft,
                top: this.state.offsetTop,
                WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                transform: `translate3d(${x}px, ${y}px, 0)`,
              }}
            >
              {this.props.text}
            </TooltipBubble>
          )}
        </Motion>
        <Inline
          cursor="pointer"
          innerRef={c => (this.child = c)}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {this.props.children}
        </Inline>
      </Block>
    );
  }
}

export default Tooltip;
