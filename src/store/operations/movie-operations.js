import OperationStatus from '../../constants/operation-status';
import {setMovies, setMoviesStatus, setPromoMovie, setPromoStatus} from '../actions/movie-actions';
import provider from '../../providers/provider';

const getMovies = () => (dispatch) => {
  dispatch(setMoviesStatus(OperationStatus.PENDING));

  return provider.getMovies()
    .then((movies) => {
      dispatch(setMovies(movies));
      dispatch(setMoviesStatus(OperationStatus.RESOLVED));
    })
    .catch((_error) => {
      dispatch(setMoviesStatus(OperationStatus.REJECTED));
    });
};

const getPromoMovie = () => (dispatch) => {
  dispatch(setPromoStatus(OperationStatus.PENDING));

  return provider.getPromoMovie()
    .then((promoMovie) => {
      dispatch(setPromoMovie(promoMovie));
      dispatch(setPromoStatus(OperationStatus.RESOLVED));
    })
    .catch((_error) => {
      dispatch(setPromoStatus(OperationStatus.REJECTED));
    });
};

export {
  getMovies,
  getPromoMovie,
};
