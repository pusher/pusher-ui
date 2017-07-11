import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  unstable_renderSubtreeIntoContainer as renderIntoContainer,
  unmountComponentAtNode,
} from 'react-dom';
import styled, { css } from 'styled-components';

import { zIndex2 } from '../theme';
import { transitionShort } from '../transitions';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: ${zIndex2};
  transition: opacity ease-out ${transitionShort};
  ${props =>
    props.withBackdrop &&
    css`
    background-color: rgba(0, 0, 0, .2);
  `}
  ${props =>
    props.isInstant &&
    css`
    opacity: 1;
  `}
  ${props =>
    props.clickThrough &&
    css`
    pointer-events: none;
  `}
`;

class Portal extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    clickThrough: PropTypes.bool,
    dismissOnClickInside: PropTypes.bool,
    isInstant: PropTypes.bool,
    isOpen: PropTypes.bool,
    withBackdrop: PropTypes.bool,
    onClickOutside: PropTypes.func, // eslint-disable-line react/require-default-props
    uniqueId: PropTypes.string, // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    clickThrough: false,
    dismissOnClickInside: false,
    isInstant: false,
    isOpen: false,
    withBackdrop: false,
  };

  componentDidMount() {
    this.renderPortal();
  }

  componentDidUpdate() {
    if (!this.dismissing) {
      if (this.props.isOpen) {
        this.renderPortal();
      } else {
        this.unrenderPortal();
      }
    }
  }

  componentWillUnmount() {
    // Tear down the portal if the parent component stops rendering it.
    // This can be made configurable if a persistent modal is required.
    this.unrenderPortal();
  }

  onClick = event => {
    // True when clicking on the portal and not on the rendered children,
    // unless the root of the rendered children has data-root set.
    if (
      event.currentTarget.children[0] === event.target ||
      event.target.dataset.root
    ) {
      this.unrenderPortal();
    }

    if (
      this.props.dismissOnClickInside &&
      event.currentTarget.contains(event.target)
    ) {
      this.unrenderPortal();
    }
  };

  unrenderPortal = () => {
    if (!this.dismissing && !this.rootContainer) {
      return;
    }

    if (this.props.onClickOutside) {
      this.props.onClickOutside();
    }

    if (!this.dismissing && this.rootContainer) {
      this.dismissing = true;
      this.container.style.opacity = 0;
      setTimeout(() => {
        unmountComponentAtNode(this.rootContainer);
        if (this.props.withBackdrop) {
          document.body.style.overflow = 'auto';
        }
        document.body.removeChild(this.rootContainer);
        this.rootContainer = null;
        this.dismissing = false;
      }, this.props.isInstant ? 0 : 200);
    }
  };

  renderContainer = () => {
    const { withBackdrop, isInstant, clickThrough } = this.props;
    return (
      <Container
        innerRef={c => (this.container = c)}
        clickThrough={clickThrough}
        isInstant={isInstant}
        withBackdrop={withBackdrop}
      >
        {typeof this.props.children === 'function'
          ? this.props.children()
          : this.props.children}
      </Container>
    );
  };

  renderPortal = () => {
    if (!this.props.isOpen) {
      return;
    }

    if (this.rootContainer) {
      return renderIntoContainer(
        this,
        this.renderContainer(),
        this.rootContainer,
      );
    }

    if (this.props.uniqueId && document.getElementById(this.props.uniqueId)) {
      this.rootContainer = document.getElementById(this.props.uniqueId);
    } else {
      this.rootContainer = document.createElement('div');
      if (this.props.uniqueId) {
        this.rootContainer.id = this.props.uniqueId;
      }
      if (this.props.withBackdrop) {
        document.body.style.overflow = 'hidden';
      }
      document.body.appendChild(this.rootContainer);
    }

    if (!this.props.isInstant) {
      // Apply opacity to the modal to trigger a transition.
      setTimeout(() => (this.container.style.opacity = 1), 50);
    }

    if (this.props.children) {
      renderIntoContainer(this, this.renderContainer(), this.rootContainer);
    }

    if (this.props.onClickOutside) {
      this.rootContainer.addEventListener('click', this.onClick);
    }
  };

  render() {
    return null;
  }
}

export default Portal;
