const MainPath = {
  INDEX: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
  NOT_FOUND: `/not-found`,
};

const MoviePath = {
  MOVIE_OVERVIEW: `/films/:id`,
  MOVIE_DETAILS: `/films/:id/details`,
  MOVIE_REVIEWS: `/films/:id/reviews`,
};

const MOVIE_PATHS = Array.from(new Set([MainPath.MOVIE, ...Object.values(MoviePath)]));

export {
  MainPath,
  MoviePath,
  MOVIE_PATHS,
};
