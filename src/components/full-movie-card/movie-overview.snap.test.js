import React from 'react';

import {render} from '@testing-library/react';

import MovieOverview from './movie-overview';

describe(`MovieOverview component`, () => {
  it(`Should render according to the snapshot with no movie provided`, () => {
    const {container} = render(<MovieOverview/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with movie provided`, () => {
    const movie = {
      id: `fakeId`,
      description: `fakeDescription`,
      director: `fakeDirector`,
      stars: [`fakeStarOne`, `fakeStarTwo`],
      rating: 9.9,
      scoresCount: 15667,
    };
    const {container} = render(<MovieOverview movie={movie}/>);
    expect(container).toMatchSnapshot();
  });
});
