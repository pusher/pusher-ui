import { configure } from '@kadira/storybook';

function loadStories() {
  require('../../src/stories'); // eslint-disable-line global-require
}

configure(loadStories, module);
