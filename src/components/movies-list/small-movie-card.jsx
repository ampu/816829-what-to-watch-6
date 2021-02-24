import React, {useState, useCallback, useRef} from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MainPath} from '../../constants/paths';

import PreviewPlayer from './preview-player';

const PLAY_TIMEOUT = 1000;

const SmallMovieCard = ({movie = {}}) => {
  const {title = ``} = movie;

  const [isActive, setActive] = useState(false);
  const timeout = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (timeout.current === null) {
      timeout.current = setTimeout(() => {
        timeout.current = null;
        setActive(true);
      }, PLAY_TIMEOUT);
    }
  }, [setActive, timeout]);

  const handleMouseLeave = useCallback(() => {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
    setActive(false);
  }, [setActive, timeout]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className="small-movie-card__image">
        <PreviewPlayer className="small-movie-card__player" movie={movie} isActive={isActive}/>
      </div>

      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={generatePath(MainPath.MOVIE, movie)}>{title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  isActive: PropTypes.bool,
};

export default SmallMovieCard;
