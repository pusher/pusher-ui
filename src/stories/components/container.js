import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { IconSet, theme } from '../../index';


class Container extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor (props) {
    super(props);
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      html, body {
        margin: 0;
        width: 100%;
        min-height: 100vh;
        font-family: ${theme.fontFamily};
        font-size: 14px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `;
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <div>
          {this.props.children}
          <IconSet />
        </div>
      </ThemeProvider>
    );
  }

}


export default Container;
