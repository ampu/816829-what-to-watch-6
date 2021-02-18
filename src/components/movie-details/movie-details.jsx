import React from 'react';
import PropTypes from 'prop-types';
import {Link, generatePath} from 'react-router-dom';

import RoutePath from '../../constants/route-path';
import PosterSize from '../../constants/poster-size';

import Logo from '../logo/logo';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import MovieDescription from '../movie-description/movie-description';
import MovieInfo from '../movie-info/movie-info';


const MovieDetails = ({movie = {}, alikeMovies = []}) => {
  const {
    title = ``,
    background = ``,
  } = movie;

  const moreLikeThis = alikeMovies.length > 0 &&
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList movies={alikeMovies}/>
    </section>;

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>

          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <MovieDescription movie={movie}>
            <Link className="btn movie-card__button" to={generatePath(RoutePath.ADD_REVIEW, movie)}>Add review</Link>
          </MovieDescription>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <MovieInfo movie={movie} posterSize={PosterSize.BIG}/>
      </div>
    </section>

    <div className="page-content">
      {moreLikeThis}

      <footer className="page-footer">
        <Logo isLight={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    background: PropTypes.string,
  }).isRequired,
  alikeMovies: MoviesList.propTypes.movies,
};


export default MovieDetails;
