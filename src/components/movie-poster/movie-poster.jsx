import React from 'react';
import PropTypes from 'prop-types';


const MoviePoster = ({movie = {}, isBig = false}) => {
  const {
    title = ``,
    poster = ``,
  } = movie;

  const className = isBig
    ? `movie-card__poster movie-card__poster--big`
    : `movie-card__poster`;

  return (
    <div className={className}>
      <img src={poster} alt={`${title} poster`} width="218" height="327"/>
    </div>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
  }),
  isBig: PropTypes.bool,
};


export default MoviePoster;
