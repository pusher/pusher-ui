import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import Checkbox from './checkbox';
import * as theme from './theme';

jest.mock('./label', () => 'Label');

describe('Checkbox', () => {
  const createSnapshot = (passedProps = {}) => {
    const defaultProps = {
      checked: false,
      label: 'Check me',
    };
    const props = {
      ...defaultProps,
      ...passedProps,
    };
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Checkbox {...props} />
          </ThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  };

  it('should render a checkbox', () => {
    createSnapshot();
  });

  it('should render a disabled checkbox', () => {
    createSnapshot({ disabled: true });
  });

  it('should render any label inside', () => {
    createSnapshot({ label: 'This is a good checkbox' });
  });

  it('should take an error state and pass it to the label', () => {
    createSnapshot({ error: true });
  });

  it('should pass on any css props', () => {
    createSnapshot({ padding: 24, margin: 12, color: 'hotpink' });
  });
});
