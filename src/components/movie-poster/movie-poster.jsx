import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import PosterSize from '../../constants/poster-size';

const MoviePoster = ({movie = {}, size = PosterSize.DEFAULT}) => {
  const {
    title = ``,
    poster = ``,
  } = movie;

  const classMap = {
    [`movie-card__poster`]: true,
    [`movie-card__poster--small`]: size === PosterSize.SMALL,
    [`movie-card__poster--big`]: size === PosterSize.BIG,
  };

  return poster && (
    <div className={getClassName(classMap)}>
      <img src={poster} alt={`${title} poster`} width="218" height="327"/>
    </div>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
  }),
  size: PropTypes.oneOf(Object.values(PosterSize)),
};

export default MoviePoster;
