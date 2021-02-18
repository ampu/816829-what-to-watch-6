import React from 'react';
import PropTypes from 'prop-types';

import PlayButton from '../play-button/play-button';
import MyListButton from '../my-list-button/my-list-button';


const MovieDescription = ({movie = {}, children}) => {
  const {
    title = ``,
    genre = ``,
    year = ``,
  } = movie;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        {genre && <span className="movie-card__genre">{genre}</span>}
        {year && <span className="movie-card__year">{year}</span>}
      </p>

      <div className="movie-card__buttons">
        <PlayButton className="btn btn--play movie-card__button"/>
        <MyListButton/>
        {children}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
  }),
  withAddReviewButton: PropTypes.bool,
  children: PropTypes.any,
};


export default MovieDescription;
