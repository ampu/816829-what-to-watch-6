import {GENRES} from './genre';

const MainPath = {
  INDEX: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};

const MoviePath = {
  MOVIE_OVERVIEW: `/films/:id`,
  MOVIE_DETAILS: `/films/:id/details`,
  MOVIE_REVIEWS: `/films/:id/reviews`,
};

const GENRE_PATH = `/:genre(${GENRES.map((genre) => genre.slug).join(`|`)})`;

export {
  MainPath,
  MoviePath,
  GENRE_PATH,
};
