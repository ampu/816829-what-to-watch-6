import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from './small-movie-card';


const MoviesList = ({movies}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => <SmallMovieCard key={movie.id} movie={movie}/>)}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(SmallMovieCard.propTypes.movie),
};


export default MoviesList;
