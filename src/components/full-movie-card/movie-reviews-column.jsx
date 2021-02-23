import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import {getReviewKey} from '../../utils/review-util';

import MovieReview from './movie-review';

const MovieReviewsColumn = ({movie = {}, offset = 0, limit = 0} = {}) => {

  const reviews = useMemo(() => movie.reviews.slice(offset, offset + limit), [movie.reviews, offset, limit]);

  return (
    <div className="movie-card__reviews-col">
      {reviews.map((review) => (
        <MovieReview key={getReviewKey(movie, review)} movie={movie} review={review}/>
      ))}
    </div>
  );
};

MovieReviewsColumn.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired),
  }),
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default MovieReviewsColumn;
