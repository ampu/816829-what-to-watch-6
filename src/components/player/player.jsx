import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

import {formatDuration} from '../../data/util/movie';

import PauseButton from './pause-button';
import PlayButton from './play-button';
import FullscreenButton from './fullscreen-button';


const Player = ({movie = {}, state = {}}) => {
  const {title = ``, duration = dayjs.duration(0)} = movie;
  const {progress = 0, isPlaying = false} = state;

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"/>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatDuration(duration)}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ? <PauseButton/> : <PlayButton/>}

          <div className="player__name">{title}</div>

          <FullscreenButton/>
        </div>
      </div>
    </div>
  );
};

dayjs.extend(durationPlugin);

Player.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    duration: PropTypes.instanceOf(dayjs.duration().constructor),
  }),
  state: PropTypes.shape({
    progress: PropTypes.number,
    isPlaying: PropTypes.bool,
  }),
};


export default Player;
