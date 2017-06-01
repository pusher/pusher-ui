import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/dist/light';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import swift from 'highlight.js/lib/languages/swift';
import xml from 'highlight.js/lib/languages/xml';
import githubGist from 'react-syntax-highlighter/dist/styles/github-gist';
import styled from 'styled-components';

import { darkGrey, lightLightGrey, borderRadius1 } from '../theme';

// Note: All imported languages from highlight.js and syntax themes
// should be listed as externals in the build configuration.

registerLanguage('html', xml);
registerLanguage('java', java);
registerLanguage('javascript', javascript);
registerLanguage('swift', swift);

const CodeContainer = styled.div`
  border: 1px solid ${darkGrey};
  border-radius: ${borderRadius1}px;

  & pre {
    margin: 0;
    padding: .75em !important;
  }

  & code {
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;

const LanguageMenu = styled.div`
  padding: .75em;
  background-color: ${lightLightGrey};
  border-bottom: 1px solid ${darkGrey};
  font-size: .875em;
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
    <CodeContainer>
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
