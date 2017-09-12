import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import glamorous from 'glamorous';
import { padding, rem } from 'polished';

import { Icon, colorVariant } from './index';

const Container = glamorous('div')(
  {
    maxWidth: rem(360),
    margin: rem(6),
    ...padding(rem(12), rem(18)),
    pointerEvents: 'auto',
    borderRadius: 2,
    fontWeight: 500,
    cursor: 'pointer',
  },
  props => {
    const variant = colorVariant(props);
    return {
      boxShadow: props.theme.boxShadow3,
      color:
        variant === props.theme.whiteColor
          ? props.theme.primaryTextColor
          : props.theme.whiteColor,
      backgroundColor: variant,
      borderRadius: props.theme.borderRadius1,
    };
  },
);

class Toast extends Component {
  static propTypes = {
    id: PropTypes.number, // eslint-disable-line react/require-default-props
    dismiss: PropTypes.func, // eslint-disable-line react/require-default-props
    onDismiss: PropTypes.func, // eslint-disable-line react/require-default-props
    text: PropTypes.string.isRequired,
    timeout: PropTypes.number,
    primary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
  };

  static defaultProps = {
    timeout: 0,
    primary: false,
    success: false,
    warning: false,
    danger: false,
  };

  state = {
    isOpen: false,
    x: 100,
    opacity: 0,
  };

  componentDidMount() {
    // Show the toast by sliding it in and making it visible.
    this.setState({ isOpen: true, x: 0, opacity: 1 });
    if (this.props.timeout) {
      this.timeouts.push(setTimeout(this.dismiss, this.props.timeout));
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
  }

  timeouts = [];

  dismiss = event => {
    this.timeouts.forEach(clearTimeout);

    this.setState({
      x: event ? 0 : 100,
      opacity: 0,
    });

    // Remove the toast from the DOM after animating for subsequent toasts to
    // appear in the initial position or when multiple toasts are visible.
    if (this.props.onDismiss) {
      this.timeouts.push(
        setTimeout(() => {
          this.props.onDismiss({ id: this.props.id });
        }, 600),
      );
    }
  };

  render() {
    const { text, ...other } = this.props;
    return (
      <Motion
        style={{
          x: spring(this.state.x),
          opacity: spring(this.state.opacity),
        }}
      >
        {({ x, opacity }) => (
          <Container
            onClick={this.dismiss}
            style={{
              opacity,
              WebkitTransform: `translate3d(${x}%, 0, 0)`,
              transform: `translate3d(${x}%, 0, 0)`,
            }}
            {...other}
          >
            {text}
            {this.props.dismiss && (
              <Icon
                name="close"
                color="inherit"
                size="18"
                marginLeft={rem(12)}
                float="right"
              />
            )}
          </Container>
        )}
      </Motion>
    );
  }
}

export default Toast;
