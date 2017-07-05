import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Portal } from '../index';
import { pxToRem } from '../utils';
import Layout from './layout';
import Button from './button';
import Text from './text';

const Root = styled(Layout).attrs({
  centerJustified: true,
  flex: 1,
})`
  align-items: flex-start;
`;

const Container = styled(Layout).attrs({
  vertical: true,
  gutter: 24,
})`
  position: relative;
  top: 15vh;
  min-width: ${pxToRem(450)};
  max-width: ${pxToRem(552)};
  padding: ${pxToRem(24)};
  border-radius: ${props => props.theme.borderRadius1}px;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow3};
  ${Button} {
    flex: 1;
  }
`;

const Heading = styled(Text).attrs({
  heading: true,
})`
  color: ${props =>
    props.danger ? props.theme.negativeColor : props.theme.primaryColor};
`;

class Dialog extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    title: PropTypes.string.isRequired,
    confirmText: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    canConfirm: PropTypes.bool,
    danger: PropTypes.bool,
    className: PropTypes.string, // eslint-disable-line react/require-default-props
  };

  static defaultProps = {
    isOpen: false,
    canConfirm: true,
    danger: false,
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
        <Root data-root>
          <Container className={className}>
            {title && <Heading danger={danger}>{title}</Heading>}
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
