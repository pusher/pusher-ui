import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Button, theme } from '..';


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

function Root (props) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.span`
  flex: 1;
  font-size: 1.2em;
`;

const Items = styled.div`
  flex: 4;
  display: flex;
  justify-content: space-between;
`;

function DemoApp () {
  return (
    <Root>
      <Section>
        <Title>Buttons</Title>
        <Items>
          <Button>Default</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button danger>Danger</Button>
        </Items>
      </Section>
    </Root>
  );
}


render(<DemoApp />, document.getElementById('container'));
