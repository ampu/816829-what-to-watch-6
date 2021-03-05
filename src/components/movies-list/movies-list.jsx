import React, {memo, useState, useEffect, useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard, {SmallMovieCard as OriginalSmallMovieCard} from './small-movie-card';
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
  movies: PropTypes.arrayOf(OriginalSmallMovieCard.propTypes.movie).isRequired,
};

export {MoviesList};
export default memo(MoviesList);
