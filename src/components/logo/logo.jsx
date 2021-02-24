import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import {MainPath} from '../../constants/paths';
import {getClassName} from '../../utils/dom-util';

import './logo.css';


const Logo = ({isLight = false}) => {

  const classMap = {
    [`logo__link`]: true,
    [`logo__link--light`]: isLight,
  };

  return (
    <div className="logo">
      <NavLink className={getClassName(classMap)} activeClassName="logo__link--active" exact to={MainPath.INDEX}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </NavLink>
    </div>
  );
};

Logo.propTypes = {
  isLight: PropTypes.bool,
};


export default Logo;
