import React from 'react';

const PlayButton = (props = {}) => {
  return (
    <button type="button" {...props}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
};

export default PlayButton;
