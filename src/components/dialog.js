import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Portal } from '../index';
import {
  white,
  primaryColor,
  negativeColor,
  boxShadow3,
  borderRadius1,
} from '../theme';
import { pxToRem } from '../utils';
import Layout from './layout';
import Button from './button';
import Text from './text';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Container = styled(Layout).attrs({
  vertical: true,
  gutter: 24,
})`
  display: flex;
  flex-direction: column;
  min-width: ${pxToRem(450)};
  max-width: ${pxToRem(550)};
  position: relative;
  padding: ${pxToRem(24)};
  border-radius: ${borderRadius1}px;
  background-color: ${white};
  box-shadow: ${boxShadow3};
  ${Button} {
    flex: 1;
  }
`;

const Heading = styled(Text)`
  color: ${props => (props.danger ? negativeColor : primaryColor)};
`;

class Dialog extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    withBackdrop: PropTypes.bool,
    dismissOnClickInside: PropTypes.bool,
    onClickOutside: PropTypes.func, // eslint-disable-line react/require-default-props
    title: PropTypes.string,
    confirmText: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    canConfirm: PropTypes.bool,
    danger: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
    canConfirm: true,
  };

  render() {
    const {
      className,
      title,
      danger,
      onConfirm,
      onCancel,
      canConfirm,
      confirmText,
      children,
      ...props
    } = this.props;
    return (
      <Portal {...props} withBackdrop isInstant>
        <Root>
          <Container className={className}>
            {title && <Heading heading danger={danger}>{title}</Heading>}
            {children}
            <Layout gutter={24}>
              <Button
                onClick={onConfirm}
                danger={danger}
                primary
                disabled={!canConfirm}
              >
                {confirmText}
              </Button>
              <Button onClick={onCancel} secondary>
                Cancel
              </Button>
            </Layout>
          </Container>
        </Root>
      </Portal>
    );
  }
}

export default Dialog;
