import React from 'react';
import PropTypes from 'prop-types';

import {MoviePath} from '../../constants/paths';
import {useMatchPath} from '../../hooks/use-match-path';

import MovieOverview from './movie-overview';
import MovieDetails from './movie-details';
import MovieReviews from './movie-reviews';

import movieType from '../../typings/movie-type';

const MovieInfoTabs = ({movie}) => {
  return <>
    {useMatchPath(MoviePath.MOVIE_OVERVIEW) && <MovieOverview movie={movie}/>}
    {useMatchPath(MoviePath.MOVIE_DETAILS) && <MovieDetails movie={movie}/>}
    {useMatchPath(MoviePath.MOVIE_REVIEWS) && <MovieReviews movie={movie}/>}
  </>;
};

MovieInfoTabs.propTypes = {
  movie: PropTypes.shape(movieType),
};

export default MovieInfoTabs;
