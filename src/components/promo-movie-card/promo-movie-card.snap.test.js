import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';

import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import OperationStatus from '../../constants/operation-status';
import {ALL_GENRES} from '../../constants/genre';
import Domain from '../../store/domain';

import {PromoMovieCard} from './promo-movie-card';

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

const renderPromoMovie = (props = {}) => {
  return render((
    <redux.Provider store={initializeStoreWithState(INITIAL_STATE)}>
      <Router history={createMemoryHistory()}>
        <PromoMovieCard onMounted={jest.fn()} {...props}/>
      </Router>
    </redux.Provider>
  ));
};

describe(`PromoMovieCard component`, () => {

  it(`Should render according to the snapshot when there is no movie provided`, () => {
    Object.values(OperationStatus).forEach((movieStatus) => {
      if (movieStatus !== OperationStatus.PENDING) {
        const {container} = renderPromoMovie({movieStatus});
        expect(container).toMatchSnapshot();
      }
    });
  });

  it(`Should render according to the snapshot when promo movie is loading`, () => {
    const {container} = renderPromoMovie({movieStatus: OperationStatus.PENDING});
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot when movie is provided`, () => {
    const movie = {id: `fakeId`};
    const {container} = renderPromoMovie({movie});
    expect(container).toMatchSnapshot();
  });
});
