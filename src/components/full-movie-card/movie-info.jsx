import React from 'react';
import PropTypes from 'prop-types';

import {MoviePath} from '../../constants/paths';

import MoviePoster from '../movie-poster/movie-poster';
import MovieInfoNavigation from './movie-info-navigation';
import MovieOverview from './movie-overview';
import MovieDetails from './movie-details';

import {useMatchPath} from '../../hooks/use-match-path';
import MovieReviews from './movie-reviews';

const MovieInfo = ({movie = {}, posterSize} = {}) => {
  return (
    <div className="movie-card__info">
      <MoviePoster size={posterSize} movie={movie}/>

      <div className="movie-card__desc">
        <MovieInfoNavigation movie={movie}/>

        {useMatchPath(MoviePath.MOVIE_OVERVIEW) && <MovieOverview movie={movie}/>}
        {useMatchPath(MoviePath.MOVIE_DETAILS) && <MovieDetails movie={movie}/>}
        {useMatchPath(MoviePath.MOVIE_REVIEWS) && <MovieReviews movie={movie}/>}
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  posterSize: MoviePoster.propTypes.size,
};

export default MovieInfo;
