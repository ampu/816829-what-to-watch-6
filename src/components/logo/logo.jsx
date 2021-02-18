import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import RoutePath from '../../constants/route-path';
import {getClassName} from '../../utils/dom-util';

import './logo.css';


const Logo = ({isActive = false, isLight = false}) => {

  const classMap = {
    [`logo__link`]: true,
    [`logo__link--light`]: isLight,
    [`logo__link--active`]: isActive,
  };

  return (
    <div className="logo">
      <Link className={getClassName(classMap)} to={RoutePath.MAIN}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  isActive: PropTypes.bool,
  isLight: PropTypes.bool,
};


export default Logo;
