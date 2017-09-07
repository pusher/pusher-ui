import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { Flex, Portal } from './index';

const boxShadow = `
  0 16px 24px 2px rgba(0, 0, 0, .14),
  0  6px 30px 5px rgba(0, 0, 0, .12),
  0  8px 10px -5px rgba(0, 0, 0, .4)
`;

const Container = glamorous(Flex)({
  flexDirection: 'column',
  position: 'relative',
  padding: 10,
  borderRadius: 2,
  backgroundColor: '#fff',
  boxShadow,
});

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    withBackdrop: PropTypes.bool,
    dismissOnClickInside: PropTypes.bool,
    onClickOutside: PropTypes.func, // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    isOpen: false,
    withBackdrop: false,
    dismissOnClickInside: false,
  };

  render() {
    const {
      isOpen,
      children,
      withBackdrop,
      dismissOnClickInside,
      onClickOutside,
      ...rest
    } = this.props;
    return (
      <Portal
        isOpen={isOpen}
        withBackdrop={withBackdrop}
        dismissOnClickInside={dismissOnClickInside}
        onClickOutside={onClickOutside}
      >
        <Flex flex={1} justifyContent="center" alignItems="center">
          <Container {...rest}>{children}</Container>
        </Flex>
      </Portal>
    );
  }
}

export default Modal;
