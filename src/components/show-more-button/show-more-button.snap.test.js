import React from 'react';

import {render} from '@testing-library/react';

import ShowMoreButton from './show-more-button';

describe(`ShowMoreButton component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<ShowMoreButton onClick={jest.fn()}/>);
    expect(container).toMatchSnapshot();
  });
});
