import React from 'react';
import renderer from 'react-test-renderer';

import { Block, Flex, Inline, InlineBlock } from './index';

describe('Layout', () => {
  const generateTestsFor = (Component, otherTests = () => {}) => {
    describe(Component.displayName, () => {
      const createSnapshot = (props = {}) => {
        expect(
          renderer.create(<Component {...props} />).toJSON(),
        ).toMatchSnapshot();
      };

      it('should render a div with the proper display attribute', () => {
        createSnapshot();
      });

      it('should render children', () => {
        createSnapshot({
          children: 'Hello, world',
        });
      });

      it('should take any css property as props', () => {
        createSnapshot({
          backgroundColor: 'hotpink',
          padding: 20,
        });
      });

      otherTests(createSnapshot);
    });
  };

  generateTestsFor(Block);

  generateTestsFor(Inline);

  generateTestsFor(InlineBlock);

  generateTestsFor(Flex, createSnapshot => {
    it('should have a default prop for flexDirection set to row', () => {
      expect(Flex.defaultProps).toEqual({ flexDirection: 'row' });
    });

    it('should take a gutter prop to determine a gutter between items', () => {
      // Note: it appears that the CSS for selecting the child items is not
      // being applied to the snapshots, so this test doesn't do anything.
      const children = [<Block key="a" />, <Block key="b" />];
      createSnapshot({ gutter: 24, children });

      createSnapshot({ flexDirection: 'column', gutter: 24, children });
    });
  });
});
