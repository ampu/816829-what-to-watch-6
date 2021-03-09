import {batch} from 'react-redux';

import OperationStatus from '../../constants/operation-status';
import {setMovies, setMoviesStatus, setPromoMovie, setPromoStatus} from '../actions/movie-actions';
import provider from '../../providers/provider';

const getMovies = () => doGetMovies;

const doGetMovies = async (dispatch) => {
  dispatch(setMoviesStatus(OperationStatus.PENDING));

  return provider.getMovies()
    .then((movies) => {
      batch(() => {
        dispatch(setMovies(movies));
        dispatch(setMoviesStatus(OperationStatus.RESOLVED));
      });
    })
    .catch((_error) => {
      dispatch(setMoviesStatus(OperationStatus.REJECTED));
    });
};

const getPromoMovie = () => async (dispatch) => {
  if (!getPromoMovie.promise) {
    getPromoMovie.promise = doGetPromoMovie(dispatch)
      .catch((_error) => {
        delete getPromoMovie.promise;
      });
  }
  return getPromoMovie.promise;
};

const doGetPromoMovie = async (dispatch) => {
  dispatch(setPromoStatus(OperationStatus.PENDING));

  return provider.getPromoMovie()
    .then((promoMovie) => {
      batch(() => {
        dispatch(setPromoMovie(promoMovie));
        dispatch(setPromoStatus(OperationStatus.RESOLVED));
      });
    })
    .catch((error) => {
      dispatch(setPromoStatus(OperationStatus.REJECTED));
      throw error;
    });
};

export {
  getMovies,
  getPromoMovie,
};
