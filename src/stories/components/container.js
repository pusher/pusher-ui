import React, { Component, PropTypes } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { theme } from '../../index';


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
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `;
  }

  render () {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }

}


export default Container;
