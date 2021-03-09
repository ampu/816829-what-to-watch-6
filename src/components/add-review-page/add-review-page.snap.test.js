import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';

import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import {ALL_GENRES} from '../../constants/genre';
import Domain from '../../store/domain';
import OperationStatus from '../../constants/operation-status';

import {AddReviewPage} from './add-review-page';

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

describe(`AddReviewPage component`, () => {
  it(`Should render according to the snapshot with pending movies request`, () => {
    const {container} = render(<AddReviewPage moviesStatus={OperationStatus.PENDING}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with rejected movies request`, () => {
    const {container} = render(<AddReviewPage moviesStatus={OperationStatus.REJECTED}/>);
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with no movie found`, () => {
    const {container} = render((
      <Router history={createMemoryHistory()}>
        <AddReviewPage/>
      </Router>
    ));
    expect(container).toMatchSnapshot();
  });

  it(`Should render according to the snapshot with loaded movie`, () => {
    const movie = {id: `fakeId`};
    const {container} = render((
      <redux.Provider store={initializeStoreWithState(INITIAL_STATE)}>
        <Router history={createMemoryHistory()}>
          <AddReviewPage movie={movie}/>
        </Router>
      </redux.Provider>
    ));
    expect(container).toMatchSnapshot();
  });
});
