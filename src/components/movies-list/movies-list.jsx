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

  const movieCards = useMemo(() => {
    return movies.slice(0, limit)
      .map((movie) => <SmallMovieCard key={movie.id} movie={movie}/>);
  }, [movies, limit]);

  return <>
    <div className="catalog__movies-list">
      {movieCards}
    </div>
    {limit < movies.length && <ShowMoreButton onClick={handleShowMoreButtonClick}/>}
  </>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(SmallMovieCard.propTypes.movie).isRequired,
};

export default MoviesList;
