import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import {MainPath} from '../../constants/paths';

import movieType from '../../typings/movie-type';

const GenresListItem = ({genre, onGenreChange, isActive = false}) => {

  const classMap = {
    [`catalog__genres-item`]: true,
    [`catalog__genres-item--active`]: isActive,
  };

  const handleLinkClick = useCallback((evt) => {
    evt.preventDefault();
    onGenreChange(genre);
  }, [onGenreChange, genre]);

  return (
    <li className={getClassName(classMap)}>
      <Link className="catalog__genres-link" to={MainPath.INDEX} onClick={handleLinkClick}>{genre}</Link>
    </li>
  );
};

GenresListItem.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
  genre: movieType.genre.isRequired,
  isActive: PropTypes.bool,
};

export default GenresListItem;
