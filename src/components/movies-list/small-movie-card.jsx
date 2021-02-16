import React from 'react';
import PropTypes from 'prop-types';

import {getMovieUrl} from '../../utils/movie-util';


const SmallMovieCard = ({movie = {}}) => {
  const {id = ``, title = ``, poster = ``} = movie;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={getMovieUrl({id})}>{title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
  }),
};


export default SmallMovieCard;
