import React from 'react';
import PropTypes from 'prop-types';


const MovieBackground = ({movie} = {}) => {
  const {
    title = ``,
    background = ``,
  } = movie;

  return (
    <div className="movie-card__bg">
      <img src={background} alt={title}/>
    </div>
  );
};

MovieBackground.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    background: PropTypes.string,
  }),
};


export default MovieBackground;
