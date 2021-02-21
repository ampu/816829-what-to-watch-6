import React from 'react';
import PropTypes from 'prop-types';
import {Link, generatePath} from 'react-router-dom';

import {MoviePath} from '../../constants/paths';
import {getClassName} from '../../utils/dom-util';

import {useMatchPath} from '../../hooks/use-match-path';


const MovieInfoNavigation = ({movie}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={getClassName({[`movie-nav__item`]: true, [`movie-nav__item--active`]: useMatchPath(MoviePath.MOVIE_OVERVIEW)})}>
          <Link className="movie-nav__link" to={generatePath(MoviePath.MOVIE_OVERVIEW, movie)}>Overview</Link>
        </li>
        <li className={getClassName({[`movie-nav__item`]: true, [`movie-nav__item--active`]: useMatchPath(MoviePath.MOVIE_DETAILS)})}>
          <Link className="movie-nav__link" to={generatePath(MoviePath.MOVIE_DETAILS, movie)}>Details</Link>
        </li>
        <li className={getClassName({[`movie-nav__item`]: true, [`movie-nav__item--active`]: useMatchPath(MoviePath.MOVIE_REVIEWS)})}>
          <Link className="movie-nav__link" to={generatePath(MoviePath.MOVIE_REVIEWS, movie)}>Reviews</Link>
        </li>
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
