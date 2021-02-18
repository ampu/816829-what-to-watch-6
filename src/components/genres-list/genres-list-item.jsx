import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Genre from '../../constants/genre';
import RoutePath from '../../constants/route-path';
import {getClassName} from '../../utils/dom-util';


const GenresListItem = ({title = ``, path = RoutePath.MAIN, isActive = false}) => {

  const classMap = {
    [`catalog__genres-item`]: true,
    [`catalog__genres-item--active`]: isActive,
  };

  return (
    <li className={getClassName(classMap)}>
      <Link to={path} className="catalog__genres-link">{title}</Link>
    </li>
  );
};

GenresListItem.propTypes = {
  title: PropTypes.oneOf(Object.values(Genre)),
  path: PropTypes.string,
  isActive: PropTypes.bool,
};


export default GenresListItem;
