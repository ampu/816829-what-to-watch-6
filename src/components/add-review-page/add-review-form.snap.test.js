import React from 'react';

import {render} from '@testing-library/react';

import AddReviewForm from './add-review-form';

describe(`AddReviewForm component`, () => {
  it(`Should render according to the snapshot`, () => {
    const movie = {id: `fakeId`};
    const {container} = render(<AddReviewForm movie={movie}/>);
    expect(container).toMatchSnapshot();
  });
});
