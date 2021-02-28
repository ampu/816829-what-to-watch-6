import React, {useState, useEffect, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from './small-movie-card';
import ShowMoreButton from '../show-more-button/show-more-button';

const PAGE_LIMIT = 8;

const MoviesList = ({movies}) => {
  const [limit, setLimit] = useState(PAGE_LIMIT);

  useEffect(() => {
    setLimit(PAGE_LIMIT);
  }, [movies]);

  const handleShowMoreButtonClick = useCallback(() => {
    setLimit((currentLimit) => currentLimit + PAGE_LIMIT);
  }, [setLimit]);

  const renderedMovies = useMemo(() => {
    return Array.from({length: Math.min(limit, movies.length)}, (_, index) => {
      const movie = movies[index];
      return <SmallMovieCard key={movie.id} movie={movie}/>;
    });
  }, [movies, limit]);

  return <>
    <div className="catalog__movies-list">
      {renderedMovies}
    </div>
    {limit < movies.length && <ShowMoreButton onClick={handleShowMoreButtonClick}/>}
  </>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(SmallMovieCard.propTypes.movie),
};

export default MoviesList;
