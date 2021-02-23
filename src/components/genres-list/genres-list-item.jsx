import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {GENRES} from '../../constants/genre';
import {GENRE_PATH} from '../../constants/paths';
import {getClassName} from '../../utils/dom-util';

const GenresListItem = ({genre = {}, isActive = false}) => {

  const classMap = {
    [`catalog__genres-item`]: true,
    [`catalog__genres-item--active`]: isActive,
  };

  return (
    <li className={getClassName(classMap)}>
      <Link to={generatePath(GENRE_PATH, {genre: genre.slug})} className="catalog__genres-link">{genre.category}</Link>
    </li>
  );
};

GenresListItem.propTypes = {
  genre: PropTypes.oneOf(GENRES),
  isActive: PropTypes.bool,
};

export default GenresListItem;
