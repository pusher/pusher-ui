import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import { Toast } from './index';
import * as theme from './theme';

describe('Toast', () => {
  const defaultProps = {
    text: 'I am a toast!',
  };
  const createSnapshot = (props = defaultProps) => {
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Toast {...props} />
          </ThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  };

  it('should render a toast', () => {
    createSnapshot();
  });

  it('should render take a text prop', () => {
    createSnapshot({
      ...defaultProps,
      text: 'Some message to the user',
    });
  });
});
