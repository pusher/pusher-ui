# Pusher UI

> A UI component library for Pusher web apps. Built with React.

### Install as a dependency

As per usual (you can also use NPM):

    yarn add @pusherapp/pusher-ui

You may need to add the project's peer dependencies as well:

    yarn add react styled-components

Note: You must be logged in to the `pusherapp` NPM account in order to install
the project.

### Install for development

    git clone git@github.com:pusher/pusher-ui.git
    cd pusher-ui
    yarn

### Building the library

    yarn build

### Usage

In a React entry file (as a simple example):

```javascript
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button, theme } from '@pusherapp/pusher-ui';

render((
  <ThemeProvider theme={theme}>
    <Button primary>Hello!</Button>
  </ThemeProvider>
), document.getElementById('container'));
```

You should now see a button rendered in the container.
Note that in a real scenario, the `<ThemeProvider>` component would wrap your
application as one of the outermost containers.
