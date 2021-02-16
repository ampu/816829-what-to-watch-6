import React from 'react';
import PropTypes from 'prop-types';

import MoviePoster from '../movie-poster/movie-poster';


const MovieInfo = ({movie = {}, isBigPoster}) => {
  const {
    descriptions = [],
    director = ``,
    stars = ``,
    rating: {
      score = 0,
      level = ``,
      count = 0,
    } = {},
  } = movie;

  const descriptionParagraphs = descriptions.map((description, index) => <p key={`${index}. ${description}`}>{description}</p>);

  return (
    <div className="movie-card__info">
      <MoviePoster movie={movie} isBig={isBigPoster}/>

      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        <div className="movie-rating">
          <div className="movie-rating__score">{score}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{level}</span>
            <span className="movie-rating__count">{count} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          {descriptionParagraphs}

          {director && <p className="movie-card__director"><strong>Director: {director}</strong></p>}

          {stars && <p className="movie-card__starring"><strong>Starring: {stars}</strong></p>}
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    descriptions: PropTypes.arrayOf(PropTypes.string),
    director: PropTypes.string,
    stars: PropTypes.string,
    rating: PropTypes.shape({
      score: PropTypes.number,
      level: PropTypes.string,
      count: PropTypes.number,
    }),
  }),
  isBigPoster: MoviePoster.propTypes.isBig,
};


export default MovieInfo;
