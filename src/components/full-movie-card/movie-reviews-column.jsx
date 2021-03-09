import React from 'react';
import PropTypes from 'prop-types';

import MovieReview from './movie-review';

import {reviewShape} from '../../typings/review-type';

const MovieReviewsColumn = ({reviews = []} = {}) => {
  return (
    <div className="movie-card__reviews-col">
      {reviews.map((review) => <MovieReview key={review.id} review={review}/>)}
    </div>
  );
};

MovieReviewsColumn.propTypes = {
  reviews: PropTypes.arrayOf(reviewShape.isRequired),
};

export default MovieReviewsColumn;
