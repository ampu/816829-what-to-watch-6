import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import {movieType} from '../../typings/movie-type';
import {useMyList} from '../../hooks/use-my-list';
import OperationStatus from '../../constants/operation-status';
import BorderSpinner from '../border-spinner/border-spinner';
import {getMovieById} from '../../utils/movie-util';
import {useFavoriteMovieToggle} from '../../hooks/use-favorite-movie-toggle';

import './my-list-button.css';
import Container from '../container/container';

const MyListButton = ({className, movie} = {}) => {

  const [moviesStatus, movies] = useMyList();
  const isInMyList = useMemo(() => !!getMovieById(movies, movie.id), [movies, movie]);

  const [toggleFavoriteStatus, toggleFavorite, isActiveByToggle] = useFavoriteMovieToggle(movie.id);
  const isActive = toggleFavoriteStatus === OperationStatus.UNSET ? isInMyList : isActiveByToggle;

  const handleButtonClick = useCallback(() => {
    toggleFavorite(!isActive);
  }, [toggleFavorite, isActive]);

  if (moviesStatus === OperationStatus.PENDING) {
    return (
      <div className={className}>
        <Container isAbsolute isCentered>
          <BorderSpinner/>
        </Container>
      </div>
    );
  }

  if (moviesStatus === OperationStatus.REJECTED) {
    return null;
  }

  const isDisabled = toggleFavoriteStatus === OperationStatus.PENDING;
  const isRejected = toggleFavoriteStatus === OperationStatus.REJECTED;

  const classMap = {
    [`my-list-button`]: true,
    [`my-list-button--disabled`]: isDisabled,
    [`shake`]: isRejected,
    [className]: true,
  };

  return (
    <button type="button" className={getClassName(classMap)} onClick={handleButtonClick} disabled={isDisabled}>
      {isActive && (
        <svg viewBox="0 0 19 14" width="19" height="14">
          <use xlinkHref="#in-list"/>
        </svg>
      )}
      {!isActive && (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>
      )}
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.shape({
    id: movieType.id,
  }).isRequired,
};

export default MyListButton;
