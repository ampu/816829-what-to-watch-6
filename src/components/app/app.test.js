import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import merge from 'lodash.merge';

import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import {ALL_GENRES} from '../../constants/genre';
import Domain from '../../store/domain';
import OperationStatus from '../../constants/operation-status';

import App from './app';

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

const USER_PATCH = {
  [Domain.USER]: {
    loginStatus: OperationStatus.RESOLVED,
    user: {id: `fakeId`, avatar: `fakeAvatar`},
  },
};

const MOVIE_PATCH = {
  [Domain.MOVIE]: {
    moviesStatus: OperationStatus.RESOLVED,
    movies: [{
      id: `fakeId`,
      preview: `fakePreview`, videoPreview: `fakeVidePreview`, video: `fakeVideo`,
      genre: `Hillarious Comedy`,
      description: `I almost peed my pants`,
    }],
  },
};

const thunkMock = () => (next) => (action) => {
  if (typeof action === `function`) {
    return Promise.resolve();
  }
  return next(action);
};

const initializeStoreWithState = configureStore([thunkMock]);

const renderApp = (history, state) => {
  return render((
    <redux.Provider store={initializeStoreWithState(state)}>
      <Router history={history}>
        <App/>
      </Router>
    </redux.Provider>
  ));
};

describe(`Route to '/' url`, () => {
  it(`Render 'Main' when user navigates to '/' url`, () => {
    const history = createMemoryHistory();

    renderApp(history, INITIAL_STATE);

    expect(history.location.pathname).toBe(`/`);
    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });
});

describe(`Route to '/login' url`, () => {
  it(`Render 'SignIn' when user navigates to '/login' url`, () => {
    const path = `/login`;
    const history = createMemoryHistory();
    history.push(path);

    renderApp(history, INITIAL_STATE);

    expect(history.location.pathname).toBe(path);
    expect(screen.getAllByText(`Sign in`)).toHaveLength(2);
    expect(screen.getByPlaceholderText(`Email address`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Password`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'Main' when user navigates to '/login' url while logged in`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    renderApp(history, merge({}, INITIAL_STATE, USER_PATCH));

    expect(history.location.pathname).toBe(`/`);
    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });
});

describe(`Route to '/films/:id' url`, () => {
  it(`Render 'NotFound' when user navigates to '/films/fakeId' url when there is no movie with id equals fakeId`, () => {
    const history = createMemoryHistory();
    history.push(`/films/fakeId`);

    renderApp(history, INITIAL_STATE);

    expect(history.location.pathname).toBe(`/not-found`);
    expect(screen.getByText(`Page Not Found`)).toBeInTheDocument();
    expect(screen.getByText(`Go to main page`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'FullMovieCard' when user navigates to '/films/fakeId' url`, () => {
    const path = `/films/fakeId`;
    const history = createMemoryHistory();
    history.push(path);

    renderApp(history, merge({}, INITIAL_STATE, MOVIE_PATCH));

    expect(history.location.pathname).toBe(path);
    expect(screen.getByText(`Overview`)).toBeInTheDocument();
    expect(screen.getByText(`Details`)).toBeInTheDocument();
    expect(screen.getByText(`Reviews`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'Overview' tab when user navigates to '/films/fakeId' url`, () => {
    const path = `/films/fakeId`;
    const history = createMemoryHistory();
    history.push(path);

    renderApp(history, merge({}, INITIAL_STATE, MOVIE_PATCH));

    expect(history.location.pathname).toBe(path);
    expect(screen.getByText(`Overview`)).toBeInTheDocument();
    expect(screen.getByText(`Details`)).toBeInTheDocument();
    expect(screen.getByText(`Reviews`)).toBeInTheDocument();
    expect(screen.getByText(`I almost peed my pants`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'MovieDetails' tab when user navigates to '/films/fakeId/details' url`, () => {
    const path = `/films/fakeId/details`;
    const history = createMemoryHistory();
    history.push(path);

    renderApp(history, merge({}, INITIAL_STATE, MOVIE_PATCH));

    expect(history.location.pathname).toBe(path);
    expect(screen.getByText(`Overview`)).toBeInTheDocument();
    expect(screen.getByText(`Details`)).toBeInTheDocument();
    expect(screen.getByText(`Reviews`)).toBeInTheDocument();
    expect(screen.getAllByText(`Hillarious Comedy`)).toHaveLength(2);
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'MovieReviews' tab when user navigates to '/films/fakeId/reviews' url`, () => {
    const path = `/films/fakeId/reviews`;
    const history = createMemoryHistory();
    history.push(path);

    renderApp(history, merge({}, INITIAL_STATE, MOVIE_PATCH));

    expect(history.location.pathname).toBe(path);
    expect(screen.getByText(`Overview`)).toBeInTheDocument();
    expect(screen.getByText(`Details`)).toBeInTheDocument();
    expect(screen.getByText(`Reviews`)).toBeInTheDocument();
    expect(screen.getByTestId(`reviews`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });
});

describe(`Route to '/player/:id' url`, () => {
  it(`Render 'NotFound' when user navigates to '/player/fakeId' url when there is no movie with id equals fakeId`, () => {
    const history = createMemoryHistory();
    history.push(`/player/fakeId`);

    renderApp(history, INITIAL_STATE);

    expect(history.location.pathname).toBe(`/not-found`);
    expect(screen.getByText(`Page Not Found`)).toBeInTheDocument();
    expect(screen.getByText(`Go to main page`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });
});

describe(`Route to '/mylist' url`, () => {
  it(`Render 'SignIn' when user navigates to '/mylist' url while not logged in`, () => {
    const history = createMemoryHistory();
    history.push(`/mylist`);

    renderApp(history, INITIAL_STATE);

    expect(history.location.pathname).toBe(`/login`);
    expect(screen.getAllByText(`Sign in`)).toHaveLength(2);
    expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'MyList' when user navigates to '/mylist' url while logged in`, () => {
    const history = createMemoryHistory();
    history.push(`/mylist`);

    renderApp(history, merge({}, INITIAL_STATE, USER_PATCH));

    expect(screen.getByText(`My list`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });
});

describe(`Route to '/films/:id/review' url`, () => {
  it(`Render 'SignIn' when user navigate to '/films/fakeId/review' url while not logged in`, () => {
    const history = createMemoryHistory();
    history.push(`/films/fakeId/review`);

    renderApp(history, INITIAL_STATE);

    expect(history.location.pathname).toBe(`/login`);
    expect(screen.getAllByText(`Sign in`)).toHaveLength(2);
    expect(screen.getByLabelText(`Email address`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'NotFound' when user navigates to '/films/fakeId/review' url while logged in when there is no movie with id equals fakeId`, () => {
    const history = createMemoryHistory();
    history.push(`/films/fakeId/review`);

    renderApp(history, merge({}, INITIAL_STATE, USER_PATCH));

    expect(history.location.pathname).toBe(`/not-found`);
    expect(screen.getByText(`Page Not Found`)).toBeInTheDocument();
    expect(screen.getByText(`Go to main page`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });

  it(`Render 'AddReviewPage' when user navigates to '/films/fakeId/review' url while logged in when there is a movie with id equals fakeId`, () => {
    const path = `/films/fakeId/review`;
    const history = createMemoryHistory();
    history.push(path);

    renderApp(history, merge({}, INITIAL_STATE, USER_PATCH, MOVIE_PATCH));

    expect(history.location.pathname).toBe(path);
    expect(screen.getByText(`Add review`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Review text`)).toBeInTheDocument();
    expect(screen.getByText(`Post`)).toBeInTheDocument();
  });
});

describe(`Route to '/non-existing-route' url`, () => {
  it(`Render 'NotFound' when user navigates to non existing route`, () => {
    const path = `/non-existing-route`;
    const history = createMemoryHistory();
    history.push(path);

    renderApp(history, INITIAL_STATE);

    expect(history.location.pathname).toBe(path);
    expect(screen.getByText(`Page Not Found`)).toBeInTheDocument();
    expect(screen.getByText(`Go to main page`)).toBeInTheDocument();
    expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
  });
});
