import provider from '../providers/provider';
import {setMovies, setMoviesStatus, setPromoMovie, setPromoStatus} from './actions/movies-actions';
import {setLoginStatus, setMyList, setMyListStatus, setUser} from './actions/user-actions';
import OperationStatus from '../constants/operation-status';

const preload = () => (dispatch) => {
  return Promise.all([
    dispatch(getMovies()),
    dispatch(getLogin()),
  ]);
};

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

const getLogin = () => (dispatch) => {
  dispatch(setLoginStatus(OperationStatus.PENDING));

  return provider.getLogin()
    .then((user) => {
      dispatch(setUser(user));
      dispatch(setLoginStatus(OperationStatus.RESOLVED));
    })
    .catch((_error) => {
      dispatch(setLoginStatus(OperationStatus.REJECTED));
    });
};

const getMyList = () => (dispatch) => {
  dispatch(setMyListStatus(OperationStatus.PENDING));

  return provider.getMyList()
    .then((myMovies) => {
      dispatch(setMyList(myMovies));
      dispatch(setMyListStatus(OperationStatus.RESOLVED));
    })
    .catch((_error) => {
      dispatch(setMyListStatus(OperationStatus.REJECTED));
    });
};

export {
  preload,
  getPromoMovie,
  getMyList,
};
