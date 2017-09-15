import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import swift from 'highlight.js/lib/languages/swift';
import xml from 'highlight.js/lib/languages/xml';
import ruby from 'highlight.js/lib/languages/ruby';
import bash from 'highlight.js/lib/languages/bash';
import githubGist from 'react-syntax-highlighter/dist/styles/github-gist';
import glamorous from 'glamorous';
import { rem } from 'polished';

import { Block, Flex, Icon, Tooltip, copyToClipboard } from './index';

// Note: All imported languages from highlight.js and syntax themes
// should be listed as externals in the build configuration.

registerLanguage('plaintext', () => ({}));
registerLanguage('html', xml);
registerLanguage('java', java);
registerLanguage('javascript', javascript);
registerLanguage('swift', swift);
registerLanguage('bash', bash);
registerLanguage('ruby', ruby);

const CodeContainer = glamorous(Block)(
  {
    fontSize: rem(14),
    '& pre': {
      margin: 0,
      padding: `${rem(12)} !important`,
    },
    '& code': {
      whiteSpace: 'pre',
    },
  },
  props => ({
    '& pre': {
      backgroundColor: `${props.theme.lightLightGreyColor} !important`,
      borderRadius: props.theme.borderRadius1,
      borderTopRightRadius: props.menu ? 0 : props.theme.borderRadius,
      borderTopLeftRadius: props.menu ? 0 : props.theme.borderRadius,
    },
    '& code': {
      fontFamily: props.theme.monoFontFamily,
    },
  }),
);

const LanguageMenu = glamorous(Flex)(
  {
    justifyContent: 'space-between',
    padding: rem(12),
    fontSize: rem(14),
    userSelect: 'none',
  },
  props => ({
    backgroundColor: props.theme.lightGreyColor,
    borderTopRightRadius: props.theme.borderRadius1,
    borderTopLeftRadius: props.theme.borderRadius1,
  }),
);

const languageMap = {
  plaintext: 'Plaintext',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript',
  swift: 'Swift',
  ruby: 'Ruby',
  bash: 'Bash',
};

class Code extends Component {
  static defaultProps = {
    style: githubGist,
    menu: false,
    copyText: 'Copy to clipboard',
  };

  static propTypes = {
    children: PropTypes.string.isRequired,
    // eslint-disable-next-line react/require-default-props
    language: PropTypes.oneOf([
      'plaintext',
      'html',
      'java',
      'javascript',
      'swift',
      'ruby',
      'bash',
    ]),
    menu: PropTypes.bool,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    copyText: PropTypes.string,
    onCopy: PropTypes.func, // eslint-disable-line react/require-default-props
    label: PropTypes.string, // eslint-disable-line react/require-default-props
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
    if (this.props.onCopy) {
      this.props.onCopy(this.props, this.state);
    }
  };

  render() {
    const { language, label, menu, copyText, ...other } = this.props;

    return (
      <CodeContainer menu={menu} innerRef={c => (this.root = c)}>
        {menu && (
          <LanguageMenu>
            {label || languageMap[language]}
            <Tooltip text={this.state.copyText} position="right">
              <Icon name="copy" size="16" onClick={this.copy} />
            </Tooltip>
          </LanguageMenu>
        )}
        <SyntaxHighlighter {...other} />
      </CodeContainer>
    );
  }
}

export default Code;
