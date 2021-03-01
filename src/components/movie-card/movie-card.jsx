import React from 'react';
import PropTypes from 'prop-types';

import {getStyle} from '../../utils/movie-util';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviePoster from '../movie-poster/movie-poster';
import MovieDescription from '../movie-description/movie-description';
import MovieBackground from '../movie-background/movie-background';

const MovieCard = ({movie = {}}) => {
  const {
    title = ``,
    backgroundColor,
  } = movie;

  return (
    <section className="movie-card" style={getStyle(`backgroundColor`, backgroundColor)}>
      <MovieBackground movie={movie}/>

      <h1 className="visually-hidden">{title}</h1>

      <header className="page-header movie-card__head">
        <Logo/>

        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <MoviePoster movie={movie}/>

          <MovieDescription movie={movie}/>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

export default MovieCard;
