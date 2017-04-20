import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Portal from './portal';
import { opacityHoverEffect } from '../transitions';

const DropdownWrapper = styled.div`
  position: relative;
  cursor: pointer;
  ${props => !props.noOpacityEffect && opacityHoverEffect};
`;

class Dropdown extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    noOpacityEffect: PropTypes.bool,
    render: PropTypes.func.isRequired,
    showOnHover: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
    noOpacityEffect: false,
    showOnHover: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
  }

  close = () => {
    this.setState({ isOpen: false });
  };

  open = () => {
    this.setState({ isOpen: true });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onMouseEnter = () => {
    if (this.props.showOnHover) {
      this.open();
    }
  }

  render() {
    return (
      <DropdownWrapper
        onClick={this.toggle}
        onMouseEnter={this.onMouseEnter}
        noOpacityEffect={this.props.noOpacityEffect}
      >
        {this.props.children}
        <Portal
          isOpen={this.state.isOpen}
          onClickOutside={this.close}
          dismissOnClickInside
          isInstant
        >
          {this.props.render}
        </Portal>
      </DropdownWrapper>
    );
  }
}

export default Dropdown;
