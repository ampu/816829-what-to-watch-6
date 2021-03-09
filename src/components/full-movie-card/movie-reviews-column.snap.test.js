import React from 'react';
import range from 'lodash.range';

import {render} from '@testing-library/react';

import MovieReviewsColumn from './movie-reviews-column';

const REVIEWS_COUNT = 3;
const RANGE_OFFSET = 1;

describe(`MovieReviewsColumn component`, () => {
  it(`Should render according to the snapshot with no reviews provided`, () => {
    const {container} = render(<MovieReviewsColumn/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with reviews provided`, () => {
    const reviews = range(RANGE_OFFSET, RANGE_OFFSET + REVIEWS_COUNT).map((id) => ({
      id: id.toString(),
      user: {
        id: `fakeUserId`,
        name: `fakeUserName`,
      },
      rating: 9.9,
      text: `fakeText`,
      date: `2020-03-09`,
    }));
    const {container} = render(<MovieReviewsColumn reviews={reviews}/>);
    expect(container).toMatchSnapshot();
  });
});
