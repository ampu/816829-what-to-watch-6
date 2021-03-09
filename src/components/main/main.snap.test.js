import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';

import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import {ALL_GENRES} from '../../constants/genre';
import Domain from '../../store/domain';
import OperationStatus from '../../constants/operation-status';

import Main from './main';

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

describe(`Main component`, () => {
  it(`Should render according to the snapshot`, () => {
    const {container} = render((
      <redux.Provider store={initializeStoreWithState(INITIAL_STATE)}>
        <Router history={createMemoryHistory()}>
          <Main/>
        </Router>
      </redux.Provider>
    ));
    expect(container).toMatchSnapshot();
  });
});
