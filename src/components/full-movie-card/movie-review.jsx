import React from 'react';
import PropTypes from 'prop-types';

import {formatRating} from '../../utils/movie-util';
import {formatDate} from '../../utils/date-util';

const MovieReview = ({movie = {}, review = {}}) => {
  const {
    borderBottomStyle,
  } = movie;

  const {
    userName = ``,
    text = ``,
    date = ``,
    rating = 0,
  } = review;

  return (
    <div className="review" style={borderBottomStyle}>
      <blockquote className="review__quote">
        {text && <p className="review__text">{text}</p>}

        <footer className="review__details">
          {userName && <cite className="review__author">{userName}</cite>}
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
  movie: PropTypes.shape({
    borderBottomStyle: PropTypes.object,
  }),
  review: PropTypes.shape({
    userName: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieReview;
