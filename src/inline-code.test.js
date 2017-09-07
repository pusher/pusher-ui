import React from 'react';
import renderer from 'react-test-renderer';

import InlineCode from './inline-code';

describe('InlineCode', () => {
  const defaultProps = { children: 'const foo = "bar";' };
  const createSnapshot = (props = defaultProps) => {
    expect(
      renderer.create(<InlineCode {...props} />).toJSON(),
    ).toMatchSnapshot();
  };

  it('should render an inline codeblock element', () => {
    createSnapshot();
  });

  it('should render children', () => {
    createSnapshot({ children: <span>foo</span> });
  });

  it('should take any css props as usual', () => {
    createSnapshot({
      ...defaultProps,
      backgroundColor: 'hotpink',
      padding: 10,
    });
  });
});
