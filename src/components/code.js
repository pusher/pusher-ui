import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import swift from 'highlight.js/lib/languages/swift';
import xml from 'highlight.js/lib/languages/xml';
import githubGist from 'react-syntax-highlighter/dist/styles/github-gist';
import styled, { css } from 'styled-components';

import { pxToRem } from '../utils';

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
    ${props => props.menu && css`
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    `}
  }

  & code {
    white-space: pre;
    overflow-wrap: break-word;
  }
`;

const LanguageMenu = styled.div`
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

function Code(props) {
  const { language, menu, ...other } = props;
  return (
    <CodeContainer menu={menu}>
      {menu && <LanguageMenu>{languageMap[language]}</LanguageMenu>}
      <SyntaxHighlighter {...other} />
    </CodeContainer>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.oneOf(['html', 'java', 'javascript', 'swift']).isRequired,
  menu: PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Code.defaultProps = {
  style: githubGist,
  menu: false,
};

export default Code;
