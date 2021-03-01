import {ALL_GENRES} from '../constants/genre';

const RATING_FORMAT = {
  locale: `ru-RU`,
  options: {minimumFractionDigits: 1, maximumFractionDigits: 1},
};

const SCORES_COUNT_FORMAT = {
  locale: `ru-RU`,
  options: {maximumFractionDigits: 0},
};

/**
 * @param {Number} rating
 * @return {String}
 */
const formatRating = (rating) => {
  return rating.toLocaleString(RATING_FORMAT.locale, RATING_FORMAT.options);
};

/**
 * @param {Number} _rating
 * @return {string}
 */
const getRatingLevel = (_rating) => {
  return ``;
};

/**
 * @param {Number} scoresCount
 * @return {String}
 */
const formatScoresCount = (scoresCount) => {
  return scoresCount.toLocaleString(SCORES_COUNT_FORMAT.locale, SCORES_COUNT_FORMAT.options);
};

/**
 * @param {Array<{genre: String}>} movies
 * @return {Array<String>}
 */
const getGenresFromMovies = (movies) => {
  const genres = Array.from(new Set(movies.map((movie) => movie.genre)));

  return genres.sort((genre, anotherGenre) => genre.localeCompare(anotherGenre));
};

/**
 * @param {Array<{id:String, genre:String}>} movies
 * @param {String} id
 * @param {String} genre
 * @return {Object[]}
 */
const getAlikeMovies = (movies, {id, genre}) => {
  return movies.filter((movie) => movie.id !== id && movie.genre === genre);
};

/**
 * @param {Array<{id:String, genre:String}>} movies
 * @param {String} genre
 * @return {Object[]}
 */
const getGenreMovies = (movies, genre) => {
  return genre === ALL_GENRES
    ? movies
    : movies.filter((movie) => movie.genre === genre);
};

export {
  formatRating,
  getRatingLevel,
  formatScoresCount,
  getGenresFromMovies,
  getAlikeMovies,
  getGenreMovies,
};
