import React from 'react';
import renderer from 'react-test-renderer';

import Icon from './icon';

describe('Icon', () => {
  const createSnapshot = props => {
    expect(
      renderer.create(<Icon name="account" {...props} />).toJSON(),
    ).toMatchSnapshot();
  };

  it('should render an icon from the icon set with default props', () => {
    createSnapshot({ name: 'account' });
    createSnapshot({ name: 'pusher-logo' });
  });

  it('should not render anything if no icon is found', () => {
    console.warn = jest.fn(); // eslint-disable-line no-console
    createSnapshot({ name: 'not-really-an-icon' });
  });

  it('should allow configuring its size', () => {
    createSnapshot({ size: 12 });
    createSnapshot({ size: '24' });
    createSnapshot({ size: '16x18' });
  });

  it('should allow configuring its color', () => {
    createSnapshot({ color: 'red' });
  });

  it('should pass on any css props', () => {
    createSnapshot({ padding: 10 });
  });
});
