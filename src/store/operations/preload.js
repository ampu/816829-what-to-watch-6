import {getMovies} from './movies-operations';
import {getLogin} from './user-operations';

const preload = () => (dispatch) => {
  return Promise.all([
    dispatch(getMovies()),
    dispatch(getLogin()),
  ]);
};

export {
  preload,
};
