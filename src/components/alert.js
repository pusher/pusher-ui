import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './layout';
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
  };

  static defaultProps = {
    dismiss: false,
  };

  state = {
    dismissed: false,
  };

  dismiss = () => {
    this.setState({ dismissed: true });
  };

  render() {
    if (this.state.dismissed) {
      return null;
    }

    const { children, dismiss, ...other } = this.props;
    return (
      <Container {...other}>
        {children}
        {dismiss && <DismissIcon onClick={this.dismiss} />}
      </Container>
    );
  }
}

export default Alert;
