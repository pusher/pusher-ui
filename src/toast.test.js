import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import Toast, { options } from './toast';
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

  it('should map arbitrary css props to css', () => {
    expect(options.propsAreCssOverrides).toBe(true);
  });

  it('should include all props in the filterProps option', () => {
    expect(options.filterProps).toEqual(Object.keys(Toast.propTypes));
  });
});
