import React from 'react';

import {render} from '@testing-library/react';

import FullscreenButton from './fullscreen-button';

describe(`FullscreenButton component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<FullscreenButton/>);
    expect(container).toMatchSnapshot();
  });
});
