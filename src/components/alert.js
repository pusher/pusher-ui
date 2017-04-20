import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './icon';
import { opacityHoverEffect } from '../transitions';
import { getVariant, hexToRgba } from '../utils';
import { black, grey, white } from '../theme';


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1em;
  color: ${props => getVariant(props) || 'inherit'};
  border-radius: 3px;
  border: 1px solid ${grey};
  border-color: ${props => hexToRgba(getVariant(props) || grey, 0.8)};
  box-shadow: 0 2px 5px ${props => hexToRgba(getVariant(props) || black, 0.1)};
  ${props => props.filled && `
    background-color: ${hexToRgba(getVariant(props) || white, 0.1)};
  `}

  > h4 {
    font-weight: 500;
    margin: 0 0 .5em;
  }

  > p {
    margin: 0;
  }
`;

const DismissIcon = styled(Icon)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: inherit;
  ${opacityHoverEffect};
`;

class Alert extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    dismiss: PropTypes.bool,
    filled: PropTypes.bool,
  };

  static defaultProps = {
    dismiss: false,
    filled: false,
  };

  state = {
    dismissed: false,
  }

  dismiss = () => {
    this.setState({ dismissed: true });
  };

  render () {
    if (this.state.dismissed) {
      return null;
    }

    const { children, dismiss, title, ...other } = this.props;
    return (
      <Container {...other}>
        {title && <h4>{title}</h4>}
        {children}
        {dismiss && (
          <DismissIcon
            name="close"
            size="16"
            onClick={this.dismiss}
          />
        )}
      </Container>
    );
  }

}


export default Alert;
