import React from 'react';

import MovieReviewsColumn from './movie-reviews-column';

const COLUMN_CAPACITY = 3;

const ColumnOffset = {
  FIRST: 0,
  SECOND: COLUMN_CAPACITY,
};

const MovieReviews = ({reviews = []} = {}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <MovieReviewsColumn reviews={reviews} offset={ColumnOffset.FIRST} limit={COLUMN_CAPACITY}/>
      <MovieReviewsColumn reviews={reviews} offset={ColumnOffset.SECOND} limit={COLUMN_CAPACITY}/>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: MovieReviewsColumn.propTypes.reviews,
};

export default MovieReviews;
