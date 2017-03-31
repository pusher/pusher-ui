import React, { Component, PropTypes } from 'react';
import styled, { css } from 'styled-components';

import Icon from './icon';
import { transitionShort } from '../transitions';
import { getVariant, hexToRgba } from '../utils';


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1em;
  color: ${props => getVariant(props) || 'inherit'};
  border-radius: 3px;
  border: 1px solid ${props => props.theme.grey};
  border-color: ${props => hexToRgba(getVariant(props) || props.theme.grey, 0.8)};
  box-shadow: 0 2px 5px ${props => hexToRgba(getVariant(props) || props.theme.black, 0.1)};
  ${props => props.filled && css`
    background-color: ${hexToRgba(getVariant(props) || props.theme.white, 0.1)};
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
  opacity: .7;
  transition: opacity ${transitionShort};

  :hover {
    opacity: 1;
    cursor: pointer;
  }
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
        {title ? <h4>{title}</h4> : null}
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
