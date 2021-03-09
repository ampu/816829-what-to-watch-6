import {ALL_GENRES, GENRES_CAPACITY} from '../constants/genre';

const ratingFormat = new Intl.NumberFormat(`ru`, {minimumFractionDigits: 1, maximumFractionDigits: 1});
const scoresCountFormat = new Intl.NumberFormat(`ru`, {maximumFractionDigits: 0});

/**
 * @param {Number} rating
 * @return {String}
 */
const formatRating = (rating) => {
  return ratingFormat.format(rating);
};

/**
 * @param {Number} _rating
 * @return {string}
 */
const getRatingLevel = (_rating) => {
  // todo: implement this, e.g. «Very Good», ...
  return ``;
};

/**
 * @param {Number} scoresCount
 * @return {String}
 */
const formatScoresCount = (scoresCount) => {
  return scoresCountFormat.format(scoresCount);
};

/**
 * @param {Array<{genre: String}>} movies
 * @return {Array<String>}
 */
const getGenresFromMovies = (movies) => {
  const genres = Array.from(new Set(movies.map((movie) => movie.genre).filter(Boolean)));

  genres.sort((genre, anotherGenre) => genre.localeCompare(anotherGenre));

  genres.unshift(ALL_GENRES);

  return genres.slice(0, GENRES_CAPACITY);
};

/**
 * @param {Array<{id:String, genre:String}>} movies
 * @param {String} id
 * @param {String} genre
 * @return {Object[]}
 */
const getAlikeMovies = (movies, {id, genre} = {}) => {
  return movies.filter((movie) => movie.id !== id && movie.genre === genre);
};

/**
 * @param {Array<{id:String, genre:String}>} movies
 * @param {String} genre
 * @return {Object[]}
 */
const getMoviesByGenre = (movies, genre) => {
  return genre === ALL_GENRES
    ? movies
    : movies.filter((movie) => movie.genre === genre);
};

/**
 * @param {Array<{id:String}>} movies
 * @param {String} movieId
 * @return {?{id:String}}
 */
const getMovieById = (movies, movieId) => {
  return movies.find((movie) => movie.id === movieId);
};

export {
  formatRating,
  getRatingLevel,
  formatScoresCount,
  getGenresFromMovies,
  getAlikeMovies,
  getMoviesByGenre,
  getMovieById,
};
