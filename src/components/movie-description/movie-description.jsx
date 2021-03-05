import React from 'react';
import PropTypes from 'prop-types';
import {generatePath, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import OperationStatus from '../../constants/operation-status';

import PlayButton from '../play-button/play-button';
import MyListButton from '../my-list-button/my-list-button';

import movieType from '../../typings/movie-type';
import {selectLoginStatus} from '../../store/selectors/user-selectors';

import operationStatusType from '../../typings/operation-status-type';

const MovieDescription = ({loginStatus, movie = {}, children}) => {
  const {
    title = ``,
    genre = ``,
    year = ``,
  } = movie;

  const history = useHistory();

  const handlePlayClick = (evt) => {
    evt.preventDefault();
    history.push(generatePath(MainPath.PLAYER, movie));
  };

  return title && (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        {genre && <span className="movie-card__genre">{genre}</span>}
        {year && <span className="movie-card__year">{year}</span>}
      </p>

      <div className="movie-card__buttons">
        <PlayButton className="btn btn--play movie-card__button" onClick={handlePlayClick}/>

        {loginStatus === OperationStatus.RESOLVED && (
          <MyListButton className="btn btn--list movie-card__button" movie={movie}/>
        )}

        {children}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  loginStatus: operationStatusType,
  movie: PropTypes.shape({
    title: movieType.title,
    genre: movieType.genre,
    year: movieType.year,
  }),
  children: PropTypes.any,
};

const mapStateToProps = (state) => ({
  loginStatus: selectLoginStatus(state),
});

export {MovieDescription};
export default connect(mapStateToProps)(MovieDescription);
