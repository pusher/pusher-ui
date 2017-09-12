import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import Alert from './alert';
import * as theme from './theme';

describe('Alert', () => {
  const defaultProps = {
    children: 'Hello, world!',
  };
  const createSnapshot = (props = defaultProps) => {
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Alert {...props} />
          </ThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  };

  it('should render an element with text inside', () => {
    createSnapshot();
  });

  it('should have a dismiss button if so configured', () => {
    createSnapshot({
      ...defaultProps,
      dismiss: true,
    });
  });

  it('should have a primary color variant', () => {
    createSnapshot({
      ...defaultProps,
      primary: true,
    });
  });

  it('should pass on any css props as usual', () => {
    createSnapshot({
      ...defaultProps,
      color: 'hotpink',
    });
  });
});
