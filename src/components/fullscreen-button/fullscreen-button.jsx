import React, {memo} from 'react';

const FullscreenButton = (props = {}) => {
  return (
    <button type="button" {...props}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"/>
      </svg>
      <span>Full screen</span>
    </button>
  );
};

export {FullscreenButton};
export default memo(FullscreenButton);
