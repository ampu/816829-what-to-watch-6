import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {formatDuration, getProgress} from '../../utils/dayjs-util';
import {getClassName} from '../../utils/dom-util';

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
  const [isPlaying, setPlaying] = React.useState(true);

  const videoRef = React.useRef();
  const history = useHistory();

  return (
    <div className="player">
      <video ref={videoRef} src={video} className="player__video" poster="img/player-poster.jpg" autoPlay={history.action === `PUSH`}
        onDurationChange={() => setDurationSeconds(videoRef.current.duration)}
        onTimeUpdate={() => setProgress(getProgress(durationSeconds, videoRef.current.currentTime))}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}/>

      <button type="button" className="player__exit" onClick={() => history.goBack()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className={getClassName({[`player__time-value`]: true, [`player__time-value--active`]: durationSeconds > 0})}>
            {formatDuration(durationSeconds, `H:mm:ss`)}
          </div>
        </div>

        <div className="player__controls-row">
          {isPlaying
            ? <PauseButton className="player__play" onClick={() => videoRef.current.pause()}/>
            : <PlayButton className="player__play" onClick={() => videoRef.current.play()}/>}

          <div className="player__name">{title}</div>

          <FullscreenButton className="player__full-screen" onClick={() => videoRef.current.requestFullscreen()}/>
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
