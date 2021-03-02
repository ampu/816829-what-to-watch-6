import React from 'react';
import PropTypes from 'prop-types';
import {generatePath, useHistory} from 'react-router-dom';

import {MainPath} from '../../constants/paths';

import PlayButton from '../play-button/play-button';
import MyListButton from '../my-list-button/my-list-button';

const MovieDescription = ({movie = {}, children}) => {
  const {
    title = ``,
    genre = ``,
    year = ``,
  } = movie;

  const history = useHistory();

  const [isInMyList, setInMyList] = React.useState(false);

  const handlePlayClick = (evt) => {
    evt.preventDefault();
    history.push(generatePath(MainPath.PLAYER, movie));
  };

  const handleMyListClick = (evt) => {
    evt.preventDefault();
    // todo: implement this appropriately
    setInMyList(!isInMyList);
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
        <MyListButton className="btn btn--list movie-card__button" isActive={isInMyList} onClick={handleMyListClick}/>
        {children}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
  }),
  withAddReviewButton: PropTypes.bool,
  children: PropTypes.any,
};

export default MovieDescription;
