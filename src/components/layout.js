import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { pxToRem } from '../utils';

const Layout = styled.div`
  box-sizing: border-box;
  display: ${props =>
    do {
      if (props.block) {
        ('block');
      } else if (props.inline) {
        ('inline-flex');
      } else {
        ('flex');
      }
    }};

  ${props =>
    props.wrapped &&
    css`
    flex-wrap: wrap;
  `}

  flex-direction: ${props =>
    do {
      if (props.vertical && props.reverse) {
        ('column-reverse');
      } else if (props.vertical) {
        ('column');
      } else if (props.horizontal && props.reverse) {
        ('row-reverse');
      } else {
        ('row');
      }
    }};

  align-items: ${props =>
    do {
      if (props.center || props.centerCenter) {
        ('center');
      } else {
        ('normal');
      }
    }};

  justify-content: ${props =>
    do {
      if (props.centerCenter || props.centerJustified) {
        ('center');
      } else if (props.justified) {
        ('space-between');
      } else if (props.aroundJustified) {
        ('space-around');
      } else {
        ('normal');
      }
    }};

  flex: ${props =>
    do {
      if (props.flex === true) {
        ('1');
      } else if (props.flex) {
        props.flex;
      } else {
        ('none');
      }
    }};

  ${props =>
    props.padding &&
    css`
    padding: ${pxToRem(props.padding)};
  `}

  ${props =>
    (props.gutter && !props.wrapped) &&
    css`
    > :not(:last-child) {
      margin-${props.vertical ? 'bottom' : 'right'}: ${pxToRem(props.gutter)};
    }
  `}

  ${props =>
    (props.gutter && props.wrapped) &&
    css`
    margin-left: -${pxToRem(props.gutter)};
    > * {
      margin-bottom: ${pxToRem(props.gutter)};
      margin-left: ${pxToRem(props.gutter)};
    }
  `}
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
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  gutter: PropTypes.number,
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
  gutter: 0,
};

export default Layout;
