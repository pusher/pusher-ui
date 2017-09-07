import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import { Link } from './index';
import * as theme from './theme';

describe('Link', () => {
  const defaultProps = {
    to: 'https://example.com',
  };
  const createSnapshot = (props = defaultProps) => {
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Link {...props} />
          </ThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  };

  it('should render a link', () => {
    createSnapshot();
  });

  it('should pass on any css props', () => {
    createSnapshot({
      ...defaultProps,
      padding: 24,
      margin: 12,
      color: 'hotpink',
    });
  });
});
