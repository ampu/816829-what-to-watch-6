import React from 'react';
import PropTypes from 'prop-types';

import {getRatingLevel, formatScoresCount, formatRating} from '../../utils/movie-util';

import movieType from '../../typings/movie-type';

const MovieOverview = ({movie = {}} = {}) => {
  const {
    description = ``,
    director = ``,
    stars = ``,
    rating = 0,
    scoresCount = 0,
  } = movie;

  return <>
    {scoresCount > 0 && (
      <div className="movie-rating">
        <div className="movie-rating__score">{formatRating(rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLevel(rating)}</span>
          <span className="movie-rating__count">{formatScoresCount(scoresCount)} ratings</span>
        </p>
      </div>
    )}

    <div className="movie-card__text">
      {description && <p>{description}</p>}

      {director && <p className="movie-card__director"><strong>Director: {director}</strong></p>}

      {stars && <p className="movie-card__starring"><strong>Starring: {stars.join(`, `)}</strong></p>}
    </div>
  </>;
};

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    description: movieType.description,
    director: movieType.director,
    stars: movieType.stars,
    rating: movieType.rating,
    scoresCount: movieType.scoresCount,
  }),
};

export default MovieOverview;
