import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import RoutePath from '../../data/route-path';


const Logo = ({isActive = true, isLight = false}) => {

  const link = isActive
    ? {
      component: Link,
      props: {to: RoutePath.MAIN},
    }
    : {
      component: `a`,
      props: {},
    };

  const linkClassName = isLight
    ? `logo__link logo__link--light`
    : `logo__link`;

  return (
    <div className="logo">
      <link.component className={linkClassName} {...link.props}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </link.component>
    </div>
  );
};

Logo.propTypes = {
  isActive: PropTypes.bool,
  isLight: PropTypes.bool,
};


export default Logo;
