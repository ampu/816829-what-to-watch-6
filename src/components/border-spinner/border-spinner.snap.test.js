import React from 'react';

import {render} from '@testing-library/react';

import BorderSpinner from './border-spinner';

describe(`BorderSpinner component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<BorderSpinner/>);
    expect(container).toMatchSnapshot();
  });
});
