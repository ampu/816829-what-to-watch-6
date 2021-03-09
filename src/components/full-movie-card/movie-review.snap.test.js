import React from 'react';

import {render} from '@testing-library/react';

import MovieReview from './movie-review';

describe(`MovieReview component`, () => {
  it(`Should render according to the snapshot with no review provided`, () => {
    const {container} = render(<MovieReview/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with review provided`, () => {
    const review = {
      id: `fakeId`,
      user: {
        id: `fakeUserId`,
        name: `fakeUserName`,
      },
      rating: 9.9,
      text: `fakeText`,
      date: `2020-03-09`,
    };
    const {container} = render(<MovieReview review={review}/>);
    expect(container).toMatchSnapshot();
  });
});
