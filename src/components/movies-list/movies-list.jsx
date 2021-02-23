import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from './small-movie-card';

const MoviesList = ({movies}) => {

  const [activeMovie, setActiveMovie] = React.useState(null);
  const unsetActiveMovie = setActiveMovie.bind(null, null);

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <SmallMovieCard key={movie.id} movie={movie} isActive={activeMovie === movie}
          onMouseEnter={setActiveMovie.bind(null, movie)}
          onMouseLeave={unsetActiveMovie}/>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(SmallMovieCard.propTypes.movie),
};

export default MoviesList;
