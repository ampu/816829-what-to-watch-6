import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import Logo from './logo';

describe(`Logo component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <Logo/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when isLight`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <Logo isLight/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when user navigates away from '/' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    const {container} = render((
      <Router history={history}>
        <Logo/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
