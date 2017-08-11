import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './layout';
import Text from './text';
import Icon from './icon';

import { opacityHoverEffect } from '../transitions';
import { getVariant, hexToRgba, pxToRem } from '../utils';

const Container = styled(Layout).attrs({
  center: true,
  gutter: 12,
})`
  padding: ${pxToRem(12)} ${pxToRem(18)};
  background-color: ${props =>
    hexToRgba(getVariant(props) || props.theme.white, 0.15)};
  border-radius: 2px;
`;

const AlertText = styled(Text)`
  flex: 1;
`;

const DismissIcon = styled(Icon).attrs({
  color: 'inherit',
  name: 'close',
  size: 18,
})`
  ${opacityHoverEffect};
`;

class Alert extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dismiss: PropTypes.bool,
    primary: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    success: PropTypes.bool,
    onDismiss: PropTypes.func,
  };

  static defaultProps = {
    dismiss: false,
    primary: false,
    warning: false,
    danger: false,
    success: false,
  };

  state = {
    dismissed: false,
  };

  dismiss = () => {
    this.setState({ dismissed: true });
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  };

  render() {
    if (this.state.dismissed) {
      return null;
    }

    let iconName = 'info-circle-outline';

    if (this.props.warning) {
      iconName = 'warning';
    } else if (this.props.danger) {
      iconName = 'error';
    } else if (this.props.success) {
      iconName = 'success';
    }

    const { children, dismiss, ...other } = this.props;
    return (
      <Container {...other}>
        <Icon name={iconName} color="inherit" size={18} />
        <AlertText>
          {children}
        </AlertText>
        {dismiss && <DismissIcon onClick={this.dismiss} />}
      </Container>
    );
  }
}

export default Alert;
