import React from 'react';
import {Router, generatePath} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import {MainPath, MoviePath} from '../../constants/paths';

import MovieInfoNavigation from './movie-info-navigation';

describe(`MovieInfoNavigation component`, () => {
  it(`Should render according to the snapshot while at '/' url`, () => {
    const movie = {id: `fakeId`};

    const {container} = render((
      <Router history={createMemoryHistory()}>
        <MovieInfoNavigation movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/films/:id' url`, () => {
    const movie = {id: `fakeId`};

    const history = createMemoryHistory();
    history.push(generatePath(MainPath.MOVIE, movie));

    const {container} = render((
      <Router history={history}>
        <MovieInfoNavigation movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/films/:id/details' url`, () => {
    const movie = {id: `fakeId`};

    const history = createMemoryHistory();
    history.push(generatePath(MoviePath.MOVIE_DETAILS, movie));

    const {container} = render((
      <Router history={history}>
        <MovieInfoNavigation movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/films/:id/reviews' url`, () => {
    const movie = {id: `fakeId`};

    const history = createMemoryHistory();
    history.push(generatePath(MoviePath.MOVIE_REVIEWS, movie));

    const {container} = render((
      <Router history={history}>
        <MovieInfoNavigation movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
