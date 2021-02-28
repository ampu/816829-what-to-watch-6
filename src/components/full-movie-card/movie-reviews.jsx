import React, {memo} from 'react';

import MovieReviewsColumn from './movie-reviews-column';

const MovieReviews = ({reviews = []} = {}) => {

  const columnCapacity = Math.ceil(reviews.length / 2);

  return (
    <div className="movie-card__reviews movie-card__row">
      <MovieReviewsColumn reviews={reviews.slice(0, columnCapacity)}/>
      <MovieReviewsColumn reviews={reviews.slice(columnCapacity, columnCapacity)}/>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: MovieReviewsColumn.propTypes.reviews,
};

export {MovieReviews};
export default memo(MovieReviews);
