import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { padding, rem, rgba } from 'polished';

import { Block, Flex, Icon, colorVariant } from './index';

const Container = glamorous(
  Flex.withProps({
    flexDirection: 'row',
    alignItems: 'center',
    gutter: 12,
  }),
  { filterProps: ['primary', 'warning', 'danger', 'success'] },
)(
  {
    ...padding(rem(12), rem(18)),
  },
  props => ({
    backgroundColor: rgba(colorVariant(props), 0.15),
    borderRadius: props.theme.borderRadius1,
  }),
);

class Alert extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dismiss: PropTypes.bool,
    primary: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    success: PropTypes.bool,
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
        <Block>{children}</Block>
        {dismiss && (
          <Icon name="close" size="18" color="inherit" onClick={this.dismiss} />
        )}
      </Container>
    );
  }
}

export default Alert;
