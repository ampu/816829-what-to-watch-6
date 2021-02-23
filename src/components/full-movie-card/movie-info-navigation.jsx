import React from 'react';
import PropTypes from 'prop-types';
import {generatePath} from 'react-router-dom';

import {MoviePath} from '../../constants/paths';

import MovieInfoNavigationItem from './movie-info-navigation-item';

const MovieInfoNavigation = ({movie}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <MovieInfoNavigationItem title="Overview" path={generatePath(MoviePath.MOVIE_OVERVIEW, movie)}/>
        <MovieInfoNavigationItem title="Details" path={generatePath(MoviePath.MOVIE_DETAILS, movie)}/>
        <MovieInfoNavigationItem title="Reviews" path={generatePath(MoviePath.MOVIE_REVIEWS, movie)}/>
      </ul>
    </nav>
  );
};

MovieInfoNavigation.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfoNavigation;
