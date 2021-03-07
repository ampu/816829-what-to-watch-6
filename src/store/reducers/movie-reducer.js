import ActionType from '../action-type';
import {doSetMovies, doSetMoviesStatus, doSetPromoMovie, doSetPromoStatus} from '../actions/movie-actions';
import OperationStatus from '../../constants/operation-status';

const INITIAL_STATE = {
  moviesStatus: OperationStatus.UNSET,
  movies: [],
  promoStatus: OperationStatus.UNSET,
  promoMovie: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_MOVIES_STATUS:
      return doSetMoviesStatus(state, action.payload);

    case ActionType.SET_MOVIES:
      return doSetMovies(state, action.payload);

    case ActionType.SET_PROMO_STATUS:
      return doSetPromoStatus(state, action.payload);

    case ActionType.SET_PROMO_MOVIE:
      return doSetPromoMovie(state, action.payload);
  }
  return state;
};
