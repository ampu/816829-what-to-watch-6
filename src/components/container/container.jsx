import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import './container.css';

const Container = ({
  isAbsolute = false,
  isCentered = false,
  children,
}) => {

  const classMap = {
    [`container`]: true,
    [`container--centered`]: isCentered,
    [`container--absolute`]: isAbsolute,
  };

  return (
    <div className={getClassName(classMap)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  isAbsolute: PropTypes.bool,
  isCentered: PropTypes.bool,
  children: PropTypes.any,
};

export default Container;
