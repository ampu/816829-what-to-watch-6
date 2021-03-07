import ActionType from '../action-type';
import {doSetGenre} from '../actions/genre-actions';
import {ALL_GENRES} from '../../constants/genre';

const INITIAL_STATE = {
  genre: ALL_GENRES,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return doSetGenre(state, action.payload);
  }
  return state;
};
