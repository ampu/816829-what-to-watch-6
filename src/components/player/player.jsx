import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import getClassName from 'classnames';

import {formatDuration, getProgress} from '../../utils/date-util';

import PauseButton from '../pause-button/pause-button';
import PlayButton from '../play-button/play-button';
import FullscreenButton from '../fullscreen-button/fullscreen-button';

import './player.css';

const Player = ({movie = {}}) => {

  const {
    title = ``,
    video,
  } = movie;

  const [durationSeconds, setDurationSeconds] = React.useState(0);
  // todo: implement progress slider drag-n-drop
  const [progress, setProgress] = React.useState(0);
  const [isPlaying, setPlaying] = React.useState(false);

  const videoRef = React.useRef();

  const handlePlayClick = useCallback(() => {
    videoRef.current.play();
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

  const history = useHistory();

  useEffect(() => {
    if (history.action === `PUSH`) {
      videoRef.current.play();
    }
  }, [videoRef, history.action]);

  const timeClassMap = {
    [`player__time-value`]: true,
    [`player__time-value--active`]: durationSeconds > 0,
  };

  return (
    <div className="player">
      <video ref={videoRef} src={video} className="player__video" poster="img/player-poster.jpg"
        onDurationChange={handleVideoDurationChange}
        onTimeUpdate={handleVideoTimeUpdate}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onEnded={handleVideoEnded}/>

      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className={getClassName(timeClassMap)}>
            {formatDuration(durationSeconds, `H:mm:ss`)}
          </div>
        </div>

        <div className="player__controls-row">
          {isPlaying
            ? <PauseButton className="player__play" onClick={handlePauseClick}/>
            : <PlayButton className="player__play" onClick={handlePlayClick}/>}

          <div className="player__name">{title}</div>

          <FullscreenButton className="player__full-screen" onClick={handleFullscreenClick}/>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    video: PropTypes.string,
  }),
};

export default Player;
