import { PropTypes } from 'react';
import styled from 'styled-components';


const Layout = styled.div`
  display: ${props => do {
    if (props.block) {
      'block';
    } else if (props.inline) {
      'inline-flex';
    } else {
      'flex';
    }
  }};

  flex-direction: ${props => do {
    if (props.vertical && props.reverse) {
      'column-reverse';
    } else if (props.vertical) {
      'column';
    } else if (props.horizontal && props.reverse) {
      'row-reverse';
    } else {
      'row';
    }
  }};

  align-items: ${props => do {
    if (props.center || props.centerCenter) {
      'center';
    } else {
      'normal';
    }
  }};

  justify-content: ${props => do {
    if (props.centerCenter || props.centerJustified) {
      'center';
    } else if (props.justified) {
      'space-between';
    } else if (props.aroundJustified) {
      'space-around';
    } else {
      'normal';
    }
  }};

  flex: ${props => do {
    if (props.flex === true) {
      '1';
    } else if (props.flex) {
      props.flex;
    } else {
      'none';
    }
  }};
`;

Layout.propTypes = {
  block: PropTypes.bool,
  inline: PropTypes.bool,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  center: PropTypes.bool,
  centerCenter: PropTypes.bool,
  centerJustified: PropTypes.bool,
  aroundJustified: PropTypes.bool,
  reverse: PropTypes.bool,
  flex: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

Layout.defaultProps = {
  block: false,
  inline: false,
  horizontal: false,
  vertical: false,
  center: false,
  centerCenter: false,
  centerJustified: false,
  aroundJustified: false,
  reverse: false,
  flex: false,
};


export default Layout;
