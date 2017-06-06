import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

import { getVariant } from '../utils';
import { white, primary, zIndex1 } from '../theme';

const TooltipWrapper = styled.div`
  position: relative;
`;

const ComponentWrapper = styled.div`
  cursor: pointer;
`;

const TooltipBubble = styled.div`
  position: absolute;
  padding: 5px 8px;
  border-radius: 2px;
  background-color: ${props => getVariant(props) || primary};
  color: ${white};
  font-size: 0.9rem;
  text-align: center;
  white-space: nowrap;
  z-index: ${zIndex1};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity .18s;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: solid 5px transparent;

    ${props =>
      props.position === 'top' &&
      `
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-top: solid 5px ${getVariant(props) || primary};
      border-bottom: none;
    `}

    ${props =>
      props.position === 'right' &&
      `
      top: 50%;
      left: -5px;
      margin-top: -5px;
      border-right: solid 5px ${getVariant(props) || primary};
      border-left: none;
    `}

    ${props =>
      props.position === 'bottom' &&
      `
      top: -5px;
      left: 50%;
      margin-left: -5px;
      border-bottom: solid 5px ${getVariant(props) || primary};
      border-top: none;
    `}

    ${props =>
      props.position === 'left' &&
      `
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-left: solid 5px ${getVariant(props) || primary};
      border-right: none;
    `}
  }
`;

const sharedPropTypes = {
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
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
      <TooltipWrapper>
        <Motion
          style={{
            x: spring(this.state.isOpen ? this.state.x : 0),
            y: spring(this.state.isOpen ? this.state.y : 0),
          }}
        >
          {({ x, y }) =>
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
            </TooltipBubble>}
        </Motion>
        <ComponentWrapper
          innerRef={c => (this.child = c)}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {this.props.children}
        </ComponentWrapper>
      </TooltipWrapper>
    );
  }
}

export default Tooltip;
