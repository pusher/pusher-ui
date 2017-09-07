import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import { Label } from './index';
import * as theme from './theme';

describe('Label', () => {
  const defaultProps = {
    children: 'Hello, label',
  };
  const createSnapshot = (props = defaultProps) => {
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Label {...props} />
          </ThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  };

  it('should render a label', () => {
    createSnapshot();
  });

  it('should have a different color if an error prop is set', () => {
    createSnapshot({ error: true });
  });

  it('should render children', () => {
    createSnapshot({ children: <div>Inner content</div> });
  });
});
