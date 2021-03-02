import React from 'react';

import {withContainer} from '../../hocs/container/container';

import './spinner-loading.css';

const SpinnerLoading = () => {
  return (
    <div className="spinner-loading">
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

export {SpinnerLoading};

export default withContainer(SpinnerLoading);
