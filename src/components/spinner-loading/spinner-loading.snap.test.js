import React from 'react';

import {render} from '@testing-library/react';

import SpinnerLoading from './spinner-loading';

describe(`SpinnerLoading component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<SpinnerLoading/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when isInverse equals to true`, () => {
    const {container} = render(<SpinnerLoading isInverse/>);
    expect(container).toMatchSnapshot();
  });
});
