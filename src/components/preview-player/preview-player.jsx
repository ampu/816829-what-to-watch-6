import React from 'react';
import PropTypes from 'prop-types';

const PLAY_TIMEOUT = 1000;

/**
 * @param {HTMLMediaElement} videoElement
 * @return {Function}
 */
const playVideoAfterTimeout = (videoElement) => {
  let timeoutHandle = setTimeout(() => {
    timeoutHandle = null;

    videoElement.play();
  }, PLAY_TIMEOUT);

  return () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
      timeoutHandle = null;
    }
  };
};

const doNothing = () => {};

const PreviewPlayer = ({movie = {}, isActive = false} = {}) => {
  const {
    title = ``,
    preview,
    videoPreview,
  } = movie;

  const videoRef = React.useRef();

  React.useEffect(() => isActive ? playVideoAfterTimeout(videoRef.current) : doNothing, [videoRef, isActive]);

  if (isActive) {
    return <video ref={videoRef} src={videoPreview} poster={preview} width="280" height="175" muted={true}/>;
  }

  return <img src={preview} alt={title} width="280" height="175"/>;
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
