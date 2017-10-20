import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import Textarea from './textarea';
import * as theme from './theme';

jest.mock('./label', () => 'Label');

describe('Textarea', () => {
  const defaultProps = {
    value: '',
  };
  const createSnapshot = (passedProps = {}) => {
    const props = {
      ...defaultProps,
      ...passedProps,
    };
    expect(
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Textarea {...props} />
          </ThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  };

  it('should render a textarea', () => {
    createSnapshot();
  });

  it('should render a disabled textarea', () => {
    createSnapshot({ disabled: true });
  });

  it('should render a raised textarea', () => {
    createSnapshot({ raised: true });
  });

  it('should render a textarea with a validation error', () => {
    createSnapshot({ error: true });
  });

  it('should render inside a label, passing error props if present', () => {
    createSnapshot({ label: 'This is a good textarea' });

    createSnapshot({ label: 'This is a good textarea', error: true });
  });

  it('should pass on any css props', () => {
    createSnapshot({ padding: 24, margin: 12, color: 'hotpink' });
  });

  it('should take a value prop', () => {
    createSnapshot({ value: 'hello!' });
  });
});
