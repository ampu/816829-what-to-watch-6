import React, {memo} from 'react';

const PauseButton = (props = {}) => {
  return (
    <button type="button" {...props}>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"/>
      </svg>
      <span>Pause</span>
    </button>
  );
};

export {PauseButton};
export default memo(PauseButton);
