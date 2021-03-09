import React from 'react';

import {render} from '@testing-library/react';

import Maintenance from './maintenance';

describe(`Maintenance component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render(<Maintenance/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when isInverse equals to true`, () => {
    const {container} = render(<Maintenance isInverse/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when children are provided`, () => {
    const {container} = render(<Maintenance>Hello World!</Maintenance>);
    expect(container).toMatchSnapshot();
  });
});
