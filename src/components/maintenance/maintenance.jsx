import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import {withContainer} from '../../hocs/container/container';

import './maintenance.css';


const Maintenance = ({isInverse = false, children = `Maintenance, sorry...`}) => {

  const classMap = {
    [`maintenance`]: true,
    [`maintenance--inverse`]: isInverse,
  };

  return (
    <div className={getClassName(classMap)}>{children}</div>
  );
};

Maintenance.propTypes = {
  isInverse: PropTypes.bool,
  children: PropTypes.any,
};

export {Maintenance};
export default withContainer(Maintenance);
