# Pusher UI · [![Build Status](https://img.shields.io/travis/pusher/pusher-ui/master.svg?style=flat-square)](https://travis-ci.org/pusher/pusher-ui) [![Coverage](https://img.shields.io/coveralls/pusher/pusher-ui/master?style=flat-square.svg)](https://coveralls.io/github/pusher/pusher-ui)

> A UI component library for Pusher web apps. Built with React.

Please note that this library is in a pre-alpha stage; do not use it.

## Pusher UI as a dependency

### Install

As per usual (you can also use NPM):

    yarn add pusher-ui

You may need to add the project's peer dependencies as well:

    yarn add glamor glamorous highlight.js polished prop-types react react-dom react-motion react-router@3 react-syntax-highlighter

These dependencies are required by the project but are expected to be provided
in your project for deduplication.

### Usage

In a React entry file (as a simple example):

```javascript
import { render } from 'react-dom';
import { ThemeProvider } from 'glamorous';
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
