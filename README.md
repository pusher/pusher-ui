# Pusher UI

> A UI component library for Pusher web apps. Built with React.

## Pusher UI as a dependency

### Install

As per usual (you can also use NPM):

    yarn add pusher-ui

You may need to add the project's peer dependencies as well:

    yarn add prop-types@^15.5.8 react@^15.5.4 react-dom@^15.5.4 react-motion@^0.4.7 react-router@^3.0.0 react-syntax-highlighter@^5.1.2 styled-components@2.0.0-7

These dependencies are required by the project but are expected to be provided
in your project for deduplication.

### Usage

In a React entry file (as a simple example):

```javascript
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button, theme } from 'pusher-ui';

render((
  <ThemeProvider theme={theme}>
    <Button primary>Hello!</Button>
  </ThemeProvider>
), document.getElementById('container'));
```

You should now see a button rendered in the container.
Note that in a real scenario, the `<ThemeProvider>` component would wrap your
application as one of the outermost containers.

## Pusher UI development

### Install

    git clone git@github.com:pusher/pusher-ui.git
    cd pusher-ui
    yarn

### Building the library

    yarn build

### Development server

    yarn start
