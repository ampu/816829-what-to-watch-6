import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {getClassName} from '../../utils/dom-util';
import {useMatchPath} from '../../hooks/use-match-path';

const MovieInfoNavigationItem = ({title = ``, path = ``}) => {

  const classMap = {
    [`movie-nav__item`]: true,
    [`movie-nav__item--active`]: useMatchPath(path),
  };

  return (
    <li className={getClassName(classMap)}>
      <Link className="movie-nav__link" to={path}>{title}</Link>
    </li>
  );
};

MovieInfoNavigationItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default MovieInfoNavigationItem;
