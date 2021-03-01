import React from 'react';
import PropTypes from 'prop-types';

import {formatDuration} from '../../utils/date-util';

import './movie-details.css';

const MovieDetails = ({movie = {}} = {}) => {
  const {
    director = ``,
    stars = [],
    durationSeconds = 0,
    genre = ``,
    year = ``,
  } = movie;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        {director && (
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
        )}
        {stars.length > 0 && (
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value movie-card__details-value--stars">
              {stars.join(`,\n`)}
            </span>
          </p>
        )}
      </div>

      <div className="movie-card__text-col">
        {durationSeconds && (
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">
              {formatDuration(durationSeconds, `H[h] m[m]`)}
            </span>
          </p>
        )}
        {genre && (
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
        )}
        {year && (
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{year}</span>
          </p>
        )}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string,
    stars: PropTypes.arrayOf(PropTypes.string),
    durationSeconds: PropTypes.number,
    genre: PropTypes.string,
    year: PropTypes.number,
  }),
};

export default MovieDetails;
