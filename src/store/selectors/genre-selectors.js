import {createSelector} from 'reselect';

import Domain from '../domain';
import {getAlikeMovies, getGenresFromMovies, getMoviesByGenre} from '../../utils/movie-util';
import {selectMovieById, selectMovies} from './movie-selectors';

const selectGenre = (state) => state[Domain.GENRE].genre;
const selectGenres = createSelector(selectMovies, getGenresFromMovies);
const selectGenreMovies = createSelector(selectMovies, selectGenre, (movies, genre) => getMoviesByGenre(movies, genre));
const selectAlikeMovies = createSelector(selectMovies, selectMovieById, getAlikeMovies);

export {
  selectGenre,
  selectGenres,
  selectGenreMovies,
  selectAlikeMovies,
};
