import React from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect, generatePath} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import PosterSize from '../../constants/poster-size';
import {OperationStatus, OPERATION_STATUSES} from '../../constants/operation-status';
import {selectAlikeMovies, selectMovieById} from '../../store/selectors';

import Logo from '../logo/logo';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import MovieDescription from '../movie-description/movie-description';
import MovieBackground from '../movie-background/movie-background';
import MovieInfo from './movie-info';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';

const FullMovieCard = ({loginStatus, moviesStatus, movie = {}, alikeMovies = []}) => {

  if (moviesStatus === OperationStatus.PENDING) {
    return <SpinnerLoading/>;
  }

  if (moviesStatus === OperationStatus.REJECTED) {
    return <Maintenance/>;
  }

  if (!movie.id) {
    return <Redirect to={MainPath.NOT_FOUND}/>;
  }

  const {
    primaryBackgroundStyle,
  } = movie;

  return <>
    <section className="movie-card movie-card--full" style={primaryBackgroundStyle}>

      <div className="movie-card__hero">
        <MovieBackground movie={movie}/>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>

          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <MovieDescription movie={movie}>
            {loginStatus === OperationStatus.RESOLVED && (
              <Link className="btn movie-card__button" to={generatePath(MainPath.ADD_REVIEW, movie)}>
                Add review
              </Link>
            )}
          </MovieDescription>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <MovieInfo movie={movie} posterSize={PosterSize.BIG}/>
      </div>
    </section>

    <div className="page-content">
      {alikeMovies.length > 0 && (
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={alikeMovies}/>
        </section>
      )}

      <footer className="page-footer">
        <Logo isLight/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

FullMovieCard.propTypes = {
  loginStatus: PropTypes.oneOf(OPERATION_STATUSES),
  moviesStatus: PropTypes.oneOf(OPERATION_STATUSES),
  movie: PropTypes.shape({
    id: PropTypes.string,
    primaryBackgroundStyle: PropTypes.object,
  }),
  alikeMovies: MoviesList.propTypes.movies,
};

const mapStateToProps = (state, {movieId}) => {
  return {
    loginStatus: state.loginStatus,
    moviesStatus: state.moviesStatus,
    movie: selectMovieById(state, movieId),
    alikeMovies: selectAlikeMovies(state, movieId),
  };
};

export {FullMovieCard};
export default connect(mapStateToProps)(FullMovieCard);
