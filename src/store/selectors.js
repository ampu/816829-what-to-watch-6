import {createSelector} from 'reselect';

import {getAlikeMovies, getGenresFromMovies, getMoviesByGenre} from '../utils/movie-util';

const selectMovies = (state) => state.movies;
const selectGenre = (state) => state.genre;
const selectSecondArgument = (_, secondArgument) => secondArgument;

const selectGenres = createSelector(selectMovies, getGenresFromMovies);
const selectGenreMovies = createSelector(selectMovies, selectGenre, (movies, genre) => getMoviesByGenre(movies, genre));
const selectMovieById = createSelector(selectMovies, selectSecondArgument, (movies, movieId) => movies.find((movie) => movie.id === movieId));
const selectAlikeMovies = createSelector(selectMovies, selectMovieById, getAlikeMovies);

export {
  selectGenres,
  selectGenreMovies,
  selectMovieById,
  selectAlikeMovies,
};
