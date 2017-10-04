import React from 'react';
import renderer from 'react-test-renderer';

import Card from './card';

describe('Card', () => {
  const defaultProps = { children: 'Hello, world!' };
  const createSnapshot = (props = defaultProps) => {
    expect(renderer.create(<Card {...props} />).toJSON()).toMatchSnapshot();
  };

  it('should render a card-like div by default', () => {
    createSnapshot();
  });

  it('should take any css props as usual', () => {
    createSnapshot({
      ...defaultProps,
      backgroundColor: 'hotpink',
      padding: 10,
    });
  });

  it('should take any props that the underlying component takes', () => {
    createSnapshot({
      ...defaultProps,
      children: [<div key="a">first</div>, <div key="b">second</div>],
      gutter: 24,
    });
  });
});
