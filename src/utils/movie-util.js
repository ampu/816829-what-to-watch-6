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
 * @param {String} styleKey
 * @param {?String} color
 * @param {Boolean} isLighten
 * @return {Object}
 */
const getStyle = (styleKey, color, isLighten = false) => {
  if (!color) {
    return {};
  }
  if (isLighten) {
    return {
      [styleKey]: `rgba(255, 255, 255, 0.24)`,
    };
  }
  return {
    [styleKey]: color,
  };
};

/**
 * @param {Number} scoresCount
 * @return {String}
 */
const formatScoresCount = (scoresCount) => {
  return scoresCount.toLocaleString(SCORES_COUNT_FORMAT.locale, SCORES_COUNT_FORMAT.options);
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

export {
  formatRating,
  getRatingLevel,
  getStyle,
  formatScoresCount,
  getAlikeMovies,
};
