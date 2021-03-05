import ActionType from '../action-type';

const setGenre = (genre) => ({type: ActionType.SET_GENRE, payload: genre});
const doSetGenre = (state, genre) => ({...state, genre});

export {
  setGenre, doSetGenre,
};
