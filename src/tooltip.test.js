import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'glamorous';

import { Tooltip } from './index';
import * as theme from './theme';

function createNodeMock(element) {
  if (element.type === 'div') {
    return {
      offsetWidth: 50,
      offsetHeight: 20,
    };
  }
  return null;
}

describe('Tooltip', () => {
  const defaultProps = {
    children: <div>hover me!</div>,
    text: 'I am a tooltip',
  };
  const createSnapshot = (props = defaultProps) => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Tooltip {...props} />
      </ThemeProvider>,
      { createNodeMock },
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    return { component, tree };
  };

  it('should render a tooltip', () => {
    createSnapshot();
  });

  it('should allow configuring its position', () => {
    createSnapshot({
      ...defaultProps,
      position: 'top',
    });

    createSnapshot({
      ...defaultProps,
      position: 'right',
    });

    createSnapshot({
      ...defaultProps,
      position: 'bottom',
    });

    createSnapshot({
      ...defaultProps,
      position: 'left',
    });
  });

  it('should be visible if the isOpen prop is set', () => {
    createSnapshot({
      ...defaultProps,
      isOpen: true,
    });
  });

  it('should render children', () => {
    createSnapshot({
      ...defaultProps,
      children: <div>Inner content</div>,
    });
  });
});
