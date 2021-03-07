import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import './spinner-loading.css';

const SpinnerLoading = ({isInverse = false}) => {

  const classMap = {
    [`spinner-loading`]: true,
    [`spinner-loading--inverse`]: isInverse,
  };

  return (
    <div className={getClassName(classMap)}>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  );
};

SpinnerLoading.propTypes = {
  isInverse: PropTypes.bool,
};

export default SpinnerLoading;
