import React, {memo, useCallback, useState, useEffect} from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MainPath} from '../../constants/paths';
import {useTimeoutActivator} from '../../hooks/use-timeout-activator';

import SpinnerLoading from '../spinner-loading/spinner-loading';
import Container from '../container/container';

import './small-movie-card.css';

import movieType from '../../typings/movie-type';

const PLAY_TIMEOUT = 1000;

const SmallMovieCard = ({movie = {}}) => {
  const {
    title = ``,
    preview,
    videoPreview,
  } = movie;

  const [isActive, handleMouseEnter, handleMouseLeave] = useTimeoutActivator(PLAY_TIMEOUT);
  const [isPending, setPending] = useState(false);

  const handleVideoEnded = useCallback((evt) => {
    evt.target.load();
  }, []);

  const handleVideoWaiting = useCallback(() => {
    setPending(true);
  }, [setPending]);

  const handleVideoPlaying = useCallback(() => {
    setPending(false);
  }, [setPending]);

  const handleVideoLoadStart = useCallback(() => {
    setPending(true);
  }, [setPending]);

  useEffect(() => {
    if (!isActive) {
      setPending(false);
    }
  }, [isActive]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

      <div className="small-movie-card__image">
        {isPending && (
          <Container isCentered isAbsolute>
            <SpinnerLoading/>
          </Container>
        )}

        {!isActive && (
          <img src={preview} alt={title} width="280" height="175"/>
        )}

        {isActive && (
          <video className="small-movie-card__player"
            src={videoPreview} poster={preview}
            width="280" height="175"
            playsInline preload="none" muted autoPlay
            onEnded={handleVideoEnded}
            onWaiting={handleVideoWaiting} onPlaying={handleVideoPlaying} onLoadStart={handleVideoLoadStart}/>
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
    title: movieType.title,
    preview: movieType.preview.isRequired,
    videoPreview: movieType.videoPreview.isRequired,
  }),
  isActive: PropTypes.bool,
};

export {SmallMovieCard};
export default memo(SmallMovieCard);
