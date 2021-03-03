import React from 'react';
import PropTypes from 'prop-types';

import MovieReview from './movie-review';

const MovieReviewsColumn = ({reviews = []} = {}) => {
  return (
    <div className="movie-card__reviews-col">
      {reviews.map((review) => <MovieReview key={review.id} review={review}/>)}
    </div>
  );
};

MovieReviewsColumn.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired),
};

export default MovieReviewsColumn;
