import React from 'react';
import PropTypes from 'prop-types';

import {getReviewKey} from '../../utils/review-util';

import MovieReview from './movie-review';


const ColumnSlice = {
  FIRST: [0, 3],
  SECOND: [3, 6],
};


const MovieReviews = ({movie = {}} = {}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {movie.reviews.slice(...ColumnSlice.FIRST).map((review) => <MovieReview key={getReviewKey(movie, review)} movie={movie} review={review}/>)}
      </div>

      <div className="movie-card__reviews-col">
        {movie.reviews.slice(...ColumnSlice.SECOND).map((review) => <MovieReview key={getReviewKey(movie, review)} movie={movie} review={review}/>)}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired),
  }),
};


export default MovieReviews;
