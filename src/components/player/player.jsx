import React, {useCallback, useEffect, useState, useRef, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Redirect, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import getClassName from 'classnames';

import {MainPath} from '../../constants/paths';
import {formatDuration, getProgress} from '../../utils/date-util';
import OperationStatus from '../../constants/operation-status';
import {selectMoviesStatus, selectMovieById} from '../../store/selectors/movie-selectors';

import PauseButton from '../pause-button/pause-button';
import PlayButton from '../play-button/play-button';

import FullscreenButton from '../fullscreen-button/fullscreen-button';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';
import Container from '../container/container';

import operationStatusType from '../../typings/operation-status-type';
import {movieType} from '../../typings/movie-type';

import './player.css';

const Player = ({moviesStatus, movie = {}}) => {

  const {
    title = ``,
    video,
  } = movie;

  const [durationSeconds, setDurationSeconds] = useState(0);
  // todo: implement progress slider drag-n-drop
  const [progress, setProgress] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [isPending, setPending] = useState(false);

  /** @type {{current: HTMLVideoElement}} */
  const videoRef = useRef();

  const handlePlayClick = useCallback(() => {
    videoRef.current.play().catch(() => {});
  }, [videoRef]);

  const handlePauseClick = useCallback(() => {
    videoRef.current.pause();
  }, [videoRef]);

  const handleFullscreenClick = useCallback(() => {
    videoRef.current.requestFullscreen();
  }, [videoRef]);

  const handleVideoPlay = useCallback(() => {
    setPlaying(true);
  }, [setPlaying]);

  const handleVideoPause = useCallback(() => {
    setPlaying(false);
  }, [setPlaying]);

  const handleVideoEnded = useCallback(() => {
    setPlaying(false);
  }, [setPlaying]);

  const handleVideoDurationChange = useCallback(() => {
    setDurationSeconds(videoRef.current.duration);
  }, [videoRef, setDurationSeconds]);

  const handleVideoTimeUpdate = useCallback(() => {
    setProgress(getProgress(durationSeconds, videoRef.current.currentTime));
  }, [videoRef, durationSeconds, setProgress]);

  const handleVideoWaiting = useCallback(() => {
    setPending(true);
  }, [setPending]);

  const handleVideoPlaying = useCallback(() => {
    setPending(false);
  }, [setPending]);

  const handleVideoStalled = useCallback(() => {
    setPending(true);
  }, [setPending]);

  useEffect(() => {
    if (!isPlaying) {
      setPending(false);
    }
  }, [isPlaying]);

  const history = useHistory();

  const handleExitClick = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    if (history.action === `PUSH`) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoRef, history.action]);

  const progressStyle = useMemo(() => ({left: `${progress}%`}), [progress]);

  const timeClassMap = {
    [`player__time-value`]: true,
    [`player__time-value--active`]: durationSeconds > 0,
  };

  if (moviesStatus === OperationStatus.PENDING) {
    return (
      <Container isCentered>
        <SpinnerLoading/>
      </Container>
    );
  }

  if (moviesStatus === OperationStatus.REJECTED) {
    return (
      <Container isCentered>
        <Maintenance/>
      </Container>
    );
  }

  if (!movie.id) {
    return <Redirect to={MainPath.NOT_FOUND}/>;
  }

  return (
    <div className="player">
      {isPending && (
        <Container isCentered isAbsolute>
          <SpinnerLoading/>
        </Container>
      )}

      <video ref={videoRef} src={video}
        className="player__video" poster="img/player-poster.jpg"
        onDurationChange={handleVideoDurationChange} onTimeUpdate={handleVideoTimeUpdate}
        onPlay={handleVideoPlay} onPause={handleVideoPause} onEnded={handleVideoEnded}
        onStalled={handleVideoStalled} onWaiting={handleVideoWaiting} onPlaying={handleVideoPlaying}/>

      <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={progressStyle}>Toggler</div>
          </div>
          <div className={getClassName(timeClassMap)}>
            {formatDuration(durationSeconds, `H:mm:ss`)}
          </div>
        </div>

        <div className="player__controls-row">
          {isPlaying && <PauseButton className="player__play" onClick={handlePauseClick}/>}
          {!isPlaying && <PlayButton className="player__play" onClick={handlePlayClick}/>}

          <div className="player__name">{title}</div>

          <FullscreenButton className="player__full-screen" onClick={handleFullscreenClick}/>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  moviesStatus: operationStatusType,
  movie: PropTypes.shape({
    title: movieType.title,
    video: movieType.video.isRequired,
  }),
};

const mapStateToProps = (state, {movieId}) => {
  return {
    moviesStatus: selectMoviesStatus(state),
    movie: selectMovieById(state, movieId),
  };
};

export {Player};
export default connect(mapStateToProps)(Player);
