import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviePoster from '../movie-poster/movie-poster';
import MovieDescription from '../movie-description/movie-description';


const MovieCard = ({movie = {}}) => {
  const {
    title = ``,
    background = ``,
  } = movie;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={background} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

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
    background: PropTypes.string,
  }),
};


export default MovieCard;
