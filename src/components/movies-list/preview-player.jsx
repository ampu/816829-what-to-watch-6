import React from 'react';
import PropTypes from 'prop-types';

import './preview-player.css';

const PreviewPlayer = ({movie = {}, isActive = false, ...props} = {}) => {
  const {
    title = ``,
    preview,
    videoPreview,
  } = movie;

  return isActive
    ? <video src={videoPreview} poster={preview} width="280" height="175" muted={true} autoPlay={true} {...props}/>
    : <img src={preview} alt={title} width="280" height="175" {...props}/>;
};

PreviewPlayer.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    preview: PropTypes.string,
    videoPreview: PropTypes.string,
  }),
  isActive: PropTypes.bool,
};

export default PreviewPlayer;
