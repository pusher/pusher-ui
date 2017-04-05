import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import { Portal } from '../index';
import { white } from '../theme';


const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  border-radius: 2px;
  background-color: ${white};
  box-shadow:
    0 16px 24px 2px rgba(0, 0, 0, .14),
    0  6px 30px 5px rgba(0, 0, 0, .12),
    0  8px 10px -5px rgba(0, 0, 0, .4);
`;

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

  render () {
    const { children, ...props } = this.props;
    return (
      <Portal {...props}>
        <Root>
          <Container>
            {children}
          </Container>
        </Root>
      </Portal>
    );
  }

}


export default Modal;
