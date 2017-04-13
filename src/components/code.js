import React, { PropTypes } from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import swift from 'highlight.js/lib/languages/swift';
import xml from 'highlight.js/lib/languages/xml';
import githubGist from 'react-syntax-highlighter/dist/styles/github-gist';
import styled from 'styled-components';

import { lightGrey } from '../theme';


// Note: All imported languages from highlight.js and syntax themes
// should be listed as externals in the build configuration.

registerLanguage('html', xml);
registerLanguage('java', java);
registerLanguage('javascript', javascript);
registerLanguage('swift', swift);

const CodeContainer = styled.div`
  border: 1px solid ${lightGrey};
  box-shadow: 0 1px 5px rgba(0, 0, 0, .1);

  & pre {
    margin: 0;
  }

  & code {
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;

const LanguageMenu = styled.div`
  padding: .3em .5em;
  background-color: ${lightGrey};
  border-bottom: 1px solid ${lightGrey};
  font-size: .8em;
  user-select: none;
`;

const languageMap = {
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript',
  swift: 'Swift',
};

function Code (props) {
  const { language, menu, ...other } = props;
  return (
    <CodeContainer>
      {menu && (
        <LanguageMenu>{languageMap[language]}</LanguageMenu>
      )}
      <SyntaxHighlighter {...other} />
    </CodeContainer>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.oneOf([
    'html',
    'java',
    'javascript',
    'swift',
  ]).isRequired,
  menu: PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Code.defaultProps = {
  style: githubGist,
  menu: false,
};


export default Code;
