import {ALL_GENRES} from '../constants/genre';
import ActionType from '../constants/action-type';
import {doSetGenre, doSetMovies, doSyncGenres, doSyncGenreMovies} from './actions';

const INITIAL_STATE = {
  movies: [],
  genres: [],
  genre: ALL_GENRES,
  genreMovies: [],
};

const reduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_MOVIES:
      return doSetMovies(state, action.payload);

    case ActionType.SET_GENRE:
      return doSetGenre(state, action.payload);

    case ActionType.SYNC_GENRES:
      return doSyncGenres(state);

    case ActionType.SYNC_GENRE_MOVIES:
      return doSyncGenreMovies(state);
  }
  return state;
};

export {
  reduce,
};
