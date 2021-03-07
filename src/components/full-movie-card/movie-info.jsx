import React from 'react';
import PropTypes from 'prop-types';

import MoviePoster from '../movie-poster/movie-poster';
import MovieInfoNavigation from './movie-info-navigation';
import MovieInfoTabs from './movie-info-tabs';

import movieType from '../../typings/movie-type';

const MovieInfo = ({movie = {}, posterSize} = {}) => {

  return (
    <div className="movie-card__info">
      <MoviePoster size={posterSize} movie={movie}/>

      <div className="movie-card__desc">
        <MovieInfoNavigation movie={movie}/>
        <MovieInfoTabs movie={movie}/>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape(movieType),
  posterSize: MoviePoster.propTypes.size,
};

export default MovieInfo;
