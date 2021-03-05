import React from 'react';
import PropTypes from 'prop-types';

import {BORDER_BOTTOM_STYLE} from '../../constants/styles';
import {formatRating} from '../../utils/movie-util';
import {formatDate} from '../../utils/date-util';

import reviewType from '../../typings/review-type';

const MovieReview = ({review = {}}) => {
  const {
    user = {},
    text = ``,
    date = ``,
    rating = 0,
  } = review;

  return (
    <div className="review" style={BORDER_BOTTOM_STYLE}>
      <blockquote className="review__quote">
        {text && <p className="review__text">{text}</p>}

        <footer className="review__details">
          {user.name && <cite className="review__author">{user.name}</cite>}
          {date && (
            <time className="review__date" dateTime={formatDate(date, `YYYY-MM-DD`)}>
              {formatDate(date, `MMMM DD, YYYY`)}
            </time>
          )}
        </footer>
      </blockquote>

      {rating && <div className="review__rating">{formatRating(rating)}</div>}
    </div>
  );
};

MovieReview.propTypes = {
  review: PropTypes.shape(reviewType),
};

export default MovieReview;
