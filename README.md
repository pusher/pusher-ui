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
import { Button } from '@pusherapp/pusher-ui';

render(<Button>Hello!</Button>, document.getElementById('container'));
```

You should see a button rendered in the container.
