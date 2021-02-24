import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';

import {MainPath} from '../../constants/paths';


const SmallMovieCard = ({movie = {}, ...props}) => {
  const {title = ``, preview = ``} = movie;

  return (
    <article className="small-movie-card catalog__movies-card" {...props}>
      <div className="small-movie-card__image">
        <img src={preview} alt={title} width="280" height="175"/>
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
    preview: PropTypes.string,
  }),
};


export default SmallMovieCard;
