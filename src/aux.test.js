import React from 'react';
import renderer from 'react-test-renderer';

import Aux from './aux';

describe('Aux', () => {
  it('should render children without wrapping them with an element', () => {
    expect(
      renderer
        .create(
          <Aux>
            <div>hello</div>
          </Aux>,
        )
        .toJSON(),
    ).toMatchSnapshot();

    expect(
      renderer
        .create(
          <Aux>
            <div>one</div>
            <div>two</div>
            <div>three</div>
          </Aux>,
        )
        .toJSON(),
    ).toMatchSnapshot();

    expect(
      renderer.create(<Aux>Very interesting!</Aux>).toJSON(),
    ).toMatchSnapshot();
  });
});
