import React from 'react';

import {render} from '@testing-library/react';

import MovieBackground from './movie-background';

describe(`MovieBackground component`, () => {
  it(`Should render according to the snapshot with no movie poster provided`, () => {
    const {container} = render(<MovieBackground/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movie background provided`, () => {
    const movie = {
      title: `fakeTitle`,
      background: `fakeBackground`,
    };
    const {container} = render(<MovieBackground movie={movie}/>);
    expect(container).toMatchSnapshot();
  });
});
