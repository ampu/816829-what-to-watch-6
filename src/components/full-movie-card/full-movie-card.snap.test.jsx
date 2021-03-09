import React from 'react';
import {Router, generatePath} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';

import {render} from '@testing-library/react';

import {MainPath, MoviePath} from '../../constants/paths';

import {FullMovieCard} from './full-movie-card';
import Domain from '../../store/domain';
import OperationStatus from '../../constants/operation-status';
import {ALL_GENRES} from '../../constants/genre';
import configureStore from 'redux-mock-store';

const INITIAL_STATE = {
  [Domain.MOVIE]: {
    moviesStatus: OperationStatus.UNSET,
    movies: [],
    promoStatus: OperationStatus.UNSET,
    promoMovie: undefined,
  },
  [Domain.USER]: {
    loginStatus: OperationStatus.UNSET,
    user: undefined,
  },
  [Domain.GENRE]: {
    genre: ALL_GENRES,
  },
};

const thunkMock = () => (next) => (action) => {
  if (typeof action === `function`) {
    return Promise.resolve();
  }
  return next(action);
};

const initializeStoreWithState = configureStore([thunkMock]);

describe(`FullMovieCard component`, () => {
  it(`Should render according to the snapshot when movies request is pending`, () => {
    const {container} = render(<FullMovieCard moviesStatus={OperationStatus.PENDING} alikeMovies={[]}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when movies request was rejected`, () => {
    const {container} = render(<FullMovieCard moviesStatus={OperationStatus.REJECTED} alikeMovies={[]}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when no movie is provided`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <FullMovieCard alikeMovies={[]}/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/' url`, () => {
    const movie = {id: `fakeId`, poster: `fakePoster`};

    const {container} = render((
      <redux.Provider store={initializeStoreWithState(INITIAL_STATE)}>
        <Router history={createMemoryHistory()}>
          <FullMovieCard movie={movie} alikeMovies={[]}/>
        </Router>
      </redux.Provider>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when alike movies are provided`, () => {
    const movie = {id: `fakeId`, poster: `fakePoster`};

    const alikeMovies = [
      {id: `fakeId-1`, preview: `fakePoster`, videoPreview: `fakeVideoPreview`},
      {id: `fakeId-2`, preview: `fakePoster`, videoPreview: `fakeVideoPreview`},
    ];

    const {container} = render((
      <redux.Provider store={initializeStoreWithState(INITIAL_STATE)}>
        <Router history={createMemoryHistory()}>
          <FullMovieCard movie={movie} alikeMovies={alikeMovies}/>
        </Router>
      </redux.Provider>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/films/:id' url`, () => {
    const movie = {id: `fakeId`, poster: `fakePoster`};

    const history = createMemoryHistory();
    history.push(generatePath(MainPath.MOVIE, movie));

    const {container} = render((
      <redux.Provider store={initializeStoreWithState(INITIAL_STATE)}>
        <Router history={history}>
          <FullMovieCard movie={movie} alikeMovies={[]}/>
        </Router>
      </redux.Provider>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot while at '/films/:id/details' url`, () => {
    const movie = {id: `fakeId`, poster: `fakePoster`};

    const history = createMemoryHistory();
    history.push(generatePath(MoviePath.MOVIE_DETAILS, movie));

    const {container} = render((
      <redux.Provider store={initializeStoreWithState(INITIAL_STATE)}>
        <Router history={history}>
          <FullMovieCard movie={movie} alikeMovies={[]}/>
        </Router>
      </redux.Provider>
    ));
    expect(container).toMatchSnapshot();
  });
});
