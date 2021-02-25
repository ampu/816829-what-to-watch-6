import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MainPath} from '../../constants/paths';
import {useTimeoutActivator} from '../../hooks/use-timeout-activator';

import './small-movie-card.css';

const PLAY_TIMEOUT = 1000;

const SmallMovieCard = ({movie = {}}) => {
  const {
    title = ``,
    preview,
    videoPreview,
  } = movie;

  const [isActive, handleMouseEnter, handleMouseLeave] = useTimeoutActivator(PLAY_TIMEOUT);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      <div className="small-movie-card__image">
        {!isActive && <img src={preview} alt={title} width="280" height="175"/>}
        {isActive && (
          <video className="small-movie-card__player"
            src={videoPreview} poster={preview}
            width="280" height="175"
            muted={true} autoPlay={true}/>
        )}
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
