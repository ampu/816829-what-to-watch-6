import React from 'react';

import {render} from '@testing-library/react';

import PlayButton from './play-button';

describe(`PlayButton component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<PlayButton/>);
    expect(container).toMatchSnapshot();
  });
});
