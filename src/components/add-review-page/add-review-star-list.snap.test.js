import React from 'react';

import {render} from '@testing-library/react';

import {AddReviewStarList} from './add-review-star-list';

describe(`AddReviewStarList component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<AddReviewStarList maxRating={10}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when disabled`, () => {
    const {container} = render(<AddReviewStarList maxRating={10} isDisabled/>);
    expect(container).toMatchSnapshot();
  });
});
