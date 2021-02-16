import React from 'react';
import PropTypes from 'prop-types';


const PlayButton = ({className}) => {
  return (
    <button className={className} type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
};

PlayButton.propTypes = {
  className: PropTypes.string,
};


export default PlayButton;
