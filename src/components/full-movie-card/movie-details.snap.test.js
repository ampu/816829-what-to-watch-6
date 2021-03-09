import React from 'react';

import {render} from '@testing-library/react';

import MovieDetails from './movie-details';

describe(`MovieDetails component`, () => {
  it(`Should render according to the snapshot with no movie provided`, () => {
    const {container} = render(<MovieDetails/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movie provided`, () => {
    const movie = {
      id: `fakeId`,
      director: `fakeDirector`,
      stars: [`fakeStarOne`, `fakeStarTwo`],
      durationSeconds: 4255,
      genre: `fakeGenre`,
      year: 2021,
    };
    const {container} = render(<MovieDetails movie={movie}/>);
    expect(container).toMatchSnapshot();
  });
});
