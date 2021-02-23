const getReviewKey = (movie, review) => {
  return `${movie.id}|${review.id}`;
};

export {
  getReviewKey,
};
