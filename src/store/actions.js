import {ALL_GENRES, GENRES_CAPACITY} from '../constants/genre';
import ActionType from '../constants/action-type';
import {getGenreMovies, getGenresFromMovies} from '../utils/movie-util';

const setMovies = (movies) => ({type: ActionType.SET_MOVIES, payload: movies});
const doSetMovies = (state, movies) => ({...state, movies});

const setGenre = (genre) => ({type: ActionType.SET_GENRE, payload: genre});
const doSetGenre = (state, genre) => ({...state, genre});

const syncGenres = () => ({type: ActionType.SYNC_GENRES});
const doSyncGenres = (state) => {
  const {movies = []} = state;

  const genres = getGenresFromMovies(movies);

  genres.unshift(ALL_GENRES);

  return {...state, genres: genres.slice(0, GENRES_CAPACITY)};
};

const syncGenreMovies = () => ({type: ActionType.SYNC_GENRE_MOVIES});
const doSyncGenreMovies = (state) => {
  const {movies = [], genre = ALL_GENRES} = state;

  const genreMovies = getGenreMovies(movies, genre);

  return {...state, genreMovies};
};

export {
  setMovies, doSetMovies,
  setGenre, doSetGenre,
  syncGenres, doSyncGenres,
  syncGenreMovies, doSyncGenreMovies,
};
