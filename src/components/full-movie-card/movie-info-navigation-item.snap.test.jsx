import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import MovieInfoNavigationItem from './movie-info-navigation-item';

describe(`MovieInfoNavigationItem component`, () => {
  it(`Should render according to the snapshot with no path match`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <MovieInfoNavigationItem title="fakeTitle" path="/fakePath"/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with path match`, () => {
    const history = createMemoryHistory();
    history.push(`/fakePath`);

    const {container} = render((
      <Router history={history}>
        <MovieInfoNavigationItem title="fakeTitle" path="/fakePath"/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
