import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MainPath} from '../../constants/paths';

import PreviewPlayer from '../preview-player/preview-player';

const SmallMovieCard = ({movie = {}, isActive = false, ...props}) => {
  const {title = ``} = movie;

  return (
    <article className="small-movie-card catalog__movies-card" {...props}>
      <div className="small-movie-card__image">
        <PreviewPlayer movie={movie} isActive={isActive}/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={generatePath(MainPath.MOVIE, movie)}>{title}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }),
  isActive: PropTypes.bool,
};

export default SmallMovieCard;
