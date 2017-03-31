import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import styled, { css } from 'styled-components';

import { getVariant, hexToRgba } from '../utils';


const Container = styled.div`
  max-width: 300px;
  margin: 5px;
  padding: 1em 1.4em;
  line-height: 1.5em;
  pointer-events: auto;
  background-color: ${props => props.theme.white};
  border-radius: 3px;
  box-shadow: 0 2px 5px ${props => hexToRgba(props.theme.black, 0.1)};
  font-weight: 500;
  ${props => css`
    color: ${getVariant(props) ? props.theme.white : props.theme.black};
    border: 1px solid ${getVariant(props) || props.theme.grey};
    background-color: ${getVariant(props)};
    box-shadow: 0 2px 5px ${hexToRgba(props.theme.black, 0.2)};
  `}

  :hover {
    cursor: pointer;
  }
`;

class Toast extends Component {

  static propTypes = {
    id: PropTypes.number, // eslint-disable-line react/require-default-props
    dismiss: PropTypes.func, // eslint-disable-line react/require-default-props
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
  }

  componentDidMount () {
    // Show the toast by sliding it in and making it visible.
    this.setState({ isOpen: true, x: 0, opacity: 1 });
    if (this.props.timeout) {
      this.timeouts.push(setTimeout(this.dismiss, this.props.timeout));
    }
  }

  componentWillUnmount () {
    this.timeouts.forEach(clearTimeout);
  }

  timeouts = [];

  dismiss = (event) => {
    this.timeouts.forEach(clearTimeout);

    this.setState({
      x: event ? 0 : 100,
      opacity: 0,
    });

    // Remove the toast from the DOM after animating for subsequent toasts to
    // appear in the initial position or when multiple toasts are visible.
    if (this.props.dismiss) {
      this.timeouts.push(setTimeout(() => {
        this.props.dismiss({ id: this.props.id });
      }, 600));
    }
  };

  render () {
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
          </Container>
        )}
      </Motion>
    );
  }

}


export default Toast;
