import React from 'react';

import {render} from '@testing-library/react';

import PauseButton from './pause-button';

describe(`PauseButton component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<PauseButton/>);
    expect(container).toMatchSnapshot();
  });
});
