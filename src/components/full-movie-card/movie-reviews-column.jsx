import React, {memo} from 'react';
import PropTypes from 'prop-types';

import MovieReview from './movie-review';

const MovieReviewsColumn = ({reviews = [], offset = 0, limit = 0} = {}) => {
  return (
    <div className="movie-card__reviews-col">
      {reviews.slice(offset, offset + limit).map((review) => <MovieReview key={review.id} review={review}/>)}
    </div>
  );
};

MovieReviewsColumn.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired),
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export {MovieReviewsColumn};
export default memo(MovieReviewsColumn);
