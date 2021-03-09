import React from 'react';
import {Router, generatePath} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import {render} from '@testing-library/react';

import {MainPath, MoviePath} from '../../constants/paths';

import MovieInfo from './movie-info';

describe(`MovieInfo component`, () => {
  it(`Should render according to the snapshot while at '/' url`, () => {
    const movie = {id: `fakeId`, poster: `fakePoster`};

    const {container} = render((
      <Router history={createMemoryHistory()}>
        <MovieInfo movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/films/:id' url`, () => {
    const movie = {id: `fakeId`, poster: `fakePoster`};

    const history = createMemoryHistory();
    history.push(generatePath(MainPath.MOVIE, movie));

    const {container} = render((
      <Router history={history}>
        <MovieInfo movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/films/:id/details' url`, () => {
    const movie = {id: `fakeId`, poster: `fakePoster`};

    const history = createMemoryHistory();
    history.push(generatePath(MoviePath.MOVIE_DETAILS, movie));

    const {container} = render((
      <Router history={history}>
        <MovieInfo movie={movie}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });
});
