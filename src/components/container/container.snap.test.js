import React from 'react';

import {render} from '@testing-library/react';

import Container from './container';

describe(`Container component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<Container/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while extra properties provided`, () => {
    const {container} = render(<Container isAbsolute isCentered>fakeChildren</Container>);
    expect(container).toMatchSnapshot();
  });
});
