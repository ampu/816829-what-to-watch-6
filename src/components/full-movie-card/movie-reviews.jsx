import React from 'react';
import PropTypes from 'prop-types';

import OperationStatus from '../../constants/operation-status';
import {useReviews} from '../../hooks/use-reviews';

import MovieReviewsColumn from './movie-reviews-column';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';

import movieType from '../../typings/movie-type';

import './movie-reviews.css';

const filterLeft = (_, index) => index % 2 === 0;
const filterRight = (_, index) => index % 2 === 1;

const MovieReviews = ({movie}) => {
  const [reviewsStatus, reviews] = useReviews(movie.id);

  if (reviewsStatus === OperationStatus.PENDING) {
    return (
      <div className="movie-card__reviews">
        <SpinnerLoading isInverse/>
      </div>
    );
  }

  if (reviewsStatus === OperationStatus.REJECTED) {
    return (
      <div className="movie-card__reviews">
        <Maintenance isInverse>
          Reviews are temporary unavailable...
        </Maintenance>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="movie-card__reviews movie-card__reviews--empty">
        No one left a comment.
      </div>
    );
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <MovieReviewsColumn reviews={reviews.filter(filterLeft)}/>
      <MovieReviewsColumn reviews={reviews.filter(filterRight)}/>
    </div>
  );
};

MovieReviews.propTypes = {
  movie: PropTypes.shape({
    id: movieType.id,
  }).isRequired,
};

export default MovieReviews;
