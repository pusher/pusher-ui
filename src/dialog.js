import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { rem } from 'polished';

import { Button, Flex, H1, Portal } from './index';

const Container = glamorous(Flex)(
  {
    flexDirection: 'column',
    position: 'relative',
    top: '15vh',
    minWidth: rem(450),
    maxWidth: rem(552),
    padding: rem(24),
  },
  props => ({
    backgroundColor: props.theme.whiteColor,
    borderRadius: props.theme.borderRadius1,
    boxShadow: props.theme.boxShadow3,
  }),
);

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
        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
          data-root
        >
          <Container className={className} gutter={24}>
            <Flex flexDirection="column" gutter={24}>
              {title && <H1>{title}</H1>}
              {children}
              <Flex justifyContent="space-between" gutter={24}>
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
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Portal>
    );
  }
}

export default Dialog;
