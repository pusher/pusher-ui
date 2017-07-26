import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router';
import { darken, transparentize } from 'polished';

import { pxToRem } from '../utils';
import { transitionShort } from '../transitions';

const styledButtonOrLink = styled(props => {
  const tag = props.to ? Link : 'button';
  const { primary, secondary, danger, loading, ...allowedProps } = props;
  return createElement(tag, allowedProps, props.children);
});

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const buttonColor = props =>
  props.danger ? props.theme.negativeColor : props.theme.primaryColor;

const Container = styledButtonOrLink`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: ${pxToRem(12)} ${pxToRem(18)};
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  user-select: none;
  border: none;
  border-radius: 2px;
  white-space: nowrap;
  color: ${buttonColor};
  background-color: transparent;
  transition:
    color ${transitionShort} ease,
    background-color ${transitionShort} ease,
    border-color ${transitionShort} ease;

  &:hover {
    cursor: pointer;
    color: ${props => darken(0.1, buttonColor(props))};
  }

  &:active {
    color: ${props => darken(0.2, buttonColor(props))};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => transparentize(0.7, buttonColor(props))};
  }

  ${props =>
    props.loading &&
    css`
    &:before {
      border: 2px solid ${buttonColor};
    }
  `}

  ${props =>
    props.primary &&
    css`
    color: #fff;
    background-color: ${buttonColor};

    &:hover {
      color: #fff;
      background-color: ${darken(0.1, buttonColor(props))};
    }

    &:active {
      color: #fff;
      background-color: ${darken(0.2, buttonColor(props))};
    }

    ${props.loading &&
      css`
      &:before {
        border: 2px solid #fff;
      }
    `}
  `}

  ${props =>
    props.secondary &&
    css`
    padding: ${pxToRem(11)(props)} ${pxToRem(17)(props)};
    border: 1px solid ${buttonColor};

    &:hover {
      background-color: ${buttonColor};
      color: #fff;

      &:before {
        border: 2px solid #fff;
      }
    }

    &:active {
      background-color: ${darken(0.1, buttonColor(props))};
      border-color: ${darken(0.1, buttonColor(props))};
      color: #fff;
    }
  `}

  &[disabled] {
    background-color: ${props => props.theme.disabledColor};
    color: ${props => props.theme.tertiaryTextColor};
    cursor: not-allowed;

    &:before {
      border: 2px solid ${props => props.theme.tertiaryTextColor};
    }
  }

  ${props =>
    props.loading &&
    css`
    color: transparent;

    &:hover, &:focus, &[disabled] {
      color: transparent;
    }

    &:before {
      content: "";
      position: absolute;
      top: calc(50% - ${pxToRem(8)});
      left: calc(50% - ${pxToRem(8)});
      width: ${pxToRem(12)};
      height: ${pxToRem(12)};
      border-radius: 50%;
      animation: ${rotate} .5s linear infinite;
    }

    &:before, &:hover:before, &[disabled]:before {
      border-right-color: transparent;
    }
  `}
`;

const getTimestamp = () => new Date().getTime();

class Button extends Component {
  constructor(props) {
    super(props);
    const loading = !!props.loading;
    const startedLoading = loading ? getTimestamp() : undefined;
    this.state = {
      loading,
      disabled: props.disabled || loading,
      startedLoading,
    };
    this.timeouts = [];
  }

  componentWillUpdate(nextProps) {
    if (this.props.loading && !nextProps.loading) {
      this.eventuallyStopLoading();
    } else if (!this.props.loading && nextProps.loading) {
      this.setState({
        loading: true,
        disabled: true,
        startedLoading: getTimestamp(),
      });
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach(clearTimeout);
  }

  eventuallyStopLoading = () => {
    const now = getTimestamp();
    const startedLoading = this.state.startedLoading || now;
    const diff = now - startedLoading;
    const timeout = diff > 500 ? 0 : 500 - diff;
    this.timeouts.push(
      setTimeout(() => {
        this.setState({
          loading: false,
          disabled: false, // or depending on prop
        });
      }, timeout),
    );
  };

  render() {
    return (
      <Container
        {...this.props}
        loading={this.state.loading}
        disabled={this.state.disabled}
      >
        {this.props.children}
      </Container>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
