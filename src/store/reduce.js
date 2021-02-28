import {ALL_GENRES} from '../constants/genre';
import ActionType from '../constants/action-type';
import OperationStatus from '../constants/operation-status';

import {doSetMoviesStatus, doSetMovies, doSetPromoStatus, doSetPromoMovie} from './actions/movies-actions';
import {doSetLoginStatus, doSetUser, doSetMyListStatus, doSetMyList} from './actions/user-actions';
import {doSetGenre} from './actions/genre-actions';

const INITIAL_STATE = {
  loginStatus: OperationStatus.UNSET,
  user: undefined,
  promoStatus: OperationStatus.UNSET,
  promoMovie: undefined,
  moviesStatus: OperationStatus.UNSET,
  movies: [],
  myListStatus: OperationStatus.UNSET,
  myMovies: [],
  genre: ALL_GENRES,
};

const reduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_MOVIES_STATUS:
      return doSetMoviesStatus(state, action.payload);
    case ActionType.SET_MOVIES:
      return doSetMovies(state, action.payload);
    case ActionType.SET_PROMO_STATUS:
      return doSetPromoStatus(state, action.payload);
    case ActionType.SET_PROMO_MOVIE:
      return doSetPromoMovie(state, action.payload);

    case ActionType.SET_LOGIN_STATUS:
      return doSetLoginStatus(state, action.payload);
    case ActionType.SET_USER:
      return doSetUser(state, action.payload);
    case ActionType.SET_MY_LIST_STATUS:
      return doSetMyListStatus(state, action.payload);
    case ActionType.SET_MY_LIST:
      return doSetMyList(state, action.payload);

    case ActionType.SET_GENRE:
      return doSetGenre(state, action.payload);
  }
  return state;
};

export {
  reduce,
};
