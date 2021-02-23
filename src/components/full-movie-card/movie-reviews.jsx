import React from 'react';

import MovieReviewsColumn from './movie-reviews-column';

const COLUMN_CAPACITY = 3;

const ColumnOffset = {
  FIRST: 0,
  SECOND: COLUMN_CAPACITY,
};

const MovieReviews = ({movie = {}} = {}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <MovieReviewsColumn movie={movie} offset={ColumnOffset.FIRST} limit={COLUMN_CAPACITY}/>
      <MovieReviewsColumn movie={movie} offset={ColumnOffset.SECOND} limit={COLUMN_CAPACITY}/>
    </div>
  );
};

MovieReviews.propTypes = {
  movie: MovieReviewsColumn.propTypes.movie,
};

export default MovieReviews;
