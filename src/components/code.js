import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import swift from 'highlight.js/lib/languages/swift';
import xml from 'highlight.js/lib/languages/xml';
import githubGist from 'react-syntax-highlighter/dist/styles/github-gist';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import Layout from './layout';
import Icon from './icon';
import Tooltip from './tooltip';
import { pxToRem, copyToClipboard } from '../utils';

// Note: All imported languages from highlight.js and syntax themes
// should be listed as externals in the build configuration.

registerLanguage('html', xml);
registerLanguage('java', java);
registerLanguage('javascript', javascript);
registerLanguage('swift', swift);

const CodeContainer = styled.div`

  & pre {
    margin: 0;
    padding: ${pxToRem(12)} !important;
    background-color: ${props => props.theme.lightLightGrey} !important;
    border-radius: ${props => props.theme.borderRadius1}px;
    ${props =>
      props.menu &&
      css`
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    `}
  }

  & code {
    white-space: pre;
    overflow-wrap: break-word;
  }
`;

const LanguageMenu = styled(Layout).attrs({
  justified: true,
})`
  padding: ${pxToRem(12)};
  background-color: ${props => props.theme.lightGrey};
  border-top-right-radius: ${props => props.theme.borderRadius1}px;
  border-top-left-radius: ${props => props.theme.borderRadius1}px;
  font-size: ${pxToRem(14)};
  user-select: none;
`;

const languageMap = {
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript',
  swift: 'Swift',
};

class Code extends Component {
  static defaultProps = {
    style: githubGist,
    menu: false,
    copyText: 'Copy to clipboard',
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    language: PropTypes.oneOf(['html', 'java', 'javascript', 'swift'])
      .isRequired,
    menu: PropTypes.bool,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    copyText: PropTypes.string,
    onCopy: PropTypes.func, // eslint-disable-line react/require-default-props
  };

  constructor(props) {
    super(props);
    this.state = {
      copyText: props.copyText,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { copyText } = nextProps;
    if (copyText !== this.state.nextProps) {
      this.setState({ copyText });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.updateCopyTextTimeout);
  }

  copy = () => {
    const codes = this.root.querySelectorAll('code');
    // Select the last adjacent code element so that it works properly whether
    // we show line numbers or not (line numbers are rendered in a separate
    // code element).
    const codeBlock = codes[codes.length - 1];
    copyToClipboard(codeBlock.innerText);
    this.setState({ copyText: 'Copied!' });
    this.updateCopyTextTimeout = setTimeout(() => {
      this.setState({ copyText: Code.defaultProps.copyText });
    }, 2000);
    if (_.isFunction(this.props.onCopy)) {
      this.props.onCopy(this.props, this.state);
    }
  };

  render() {
    const { language, menu, copyText, ...other } = this.props;

    return (
      <CodeContainer menu={menu} innerRef={c => (this.root = c)}>
        {menu &&
          <LanguageMenu>
            {languageMap[language]}
            <Tooltip text={this.state.copyText} position="right">
              <Icon name="copy" size="16" onClick={this.copy} />
            </Tooltip>
          </LanguageMenu>}
        <SyntaxHighlighter {...other} />
      </CodeContainer>
    );
  }
}

export default Code;
