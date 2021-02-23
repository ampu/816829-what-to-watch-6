import {Genre, GENRES} from '../constants/genre';

const getGenreBySlug = (slug) => {
  return GENRES.find((genre) => genre.slug === slug) || Genre.ALL;
};

export {
  getGenreBySlug,
};
