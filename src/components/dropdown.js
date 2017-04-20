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
  };

  static defaultProps = {
    isOpen: false,
    noOpacityEffect: false,
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

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <DropdownWrapper
        onClick={this.toggle}
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
