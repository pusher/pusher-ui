import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { IconSet, theme } from '../../index';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      html, body {
        margin: 0;
        width: 100%;
        min-height: 100vh;
        font-family: ${theme.fontFamily};
        font-size: ${theme.fontSize}px;
        color: ${theme.primaryTextColor};
        background-color: ${theme.backgroundColor1};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
          {this.props.children}
          <IconSet />
        </div>
      </ThemeProvider>
    );
  }
}

export default Container;
