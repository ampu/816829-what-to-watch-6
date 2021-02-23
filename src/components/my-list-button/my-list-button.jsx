import React from 'react';
import PropTypes from 'prop-types';

const MyListButton = ({isActive, ...props} = {}) => {
  return (
    <button type="button" {...props}>
      {isActive
        ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"/>
          </svg>
        )
        : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"/>
          </svg>
        )
      }
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  isActive: PropTypes.bool,
};

export default MyListButton;
