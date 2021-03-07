import {createSelector} from 'reselect';

import Domain from '../domain';
import {getMovieById} from '../../utils/movie-util';

const selectMoviesStatus = (state) => state[Domain.MOVIE].moviesStatus;
const selectMovies = (state) => state[Domain.MOVIE].movies;
const selectPromoStatus = (state) => state[Domain.MOVIE].promoStatus;
const selectPromoMovie = (state) => state[Domain.MOVIE].promoMovie;
const selectMovieById = createSelector(selectMovies, (_, movieId) => movieId, getMovieById);

export {
  selectMoviesStatus,
  selectMovies,
  selectPromoStatus,
  selectPromoMovie,
  selectMovieById,
};
