import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import Input from './input';
import * as theme from './theme';

jest.mock('./label', () => 'Label');

describe('Input', () => {
  const createSnapshot = (props = {}) => {
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Input {...props} />
          </ThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  };

  it('should render an input', () => {
    createSnapshot();
  });

  it('should render a disabled input', () => {
    createSnapshot({ disabled: true });
  });

  it('should render a raised input', () => {
    createSnapshot({ raised: true });
  });

  it('should render an input with a validation error', () => {
    createSnapshot({ error: true });
  });

  it('should render inside a label, passing error props if present', () => {
    createSnapshot({ label: 'This is a good input' });

    createSnapshot({ label: 'This is a good input', error: true });
  });

  it('should pass on any css props', () => {
    createSnapshot({ padding: 24, margin: 12, color: 'hotpink' });
  });
});
