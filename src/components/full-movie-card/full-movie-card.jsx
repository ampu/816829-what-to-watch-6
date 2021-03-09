import React from 'react';
import {Link, Redirect, generatePath} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import PosterSize from '../../constants/poster-size';
import OperationStatus from '../../constants/operation-status';

import {selectMovieById, selectMoviesStatus} from '../../store/selectors/movie-selectors';
import {selectLoginStatus} from '../../store/selectors/user-selectors';
import {selectAlikeMovies} from '../../store/selectors/genre-selectors';

import Logo from '../logo/logo';
import MoviesList, {MoviesList as OriginalMoviesList} from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import MovieDescription from '../movie-description/movie-description';
import MovieBackground from '../movie-background/movie-background';
import MovieInfo from './movie-info';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';
import Container from '../container/container';
import Footer from '../footer/footer';

import operationStatusType from '../../typings/operation-status-type';
import {movieShape} from '../../typings/movie-type';

const FullMovieCard = ({loginStatus, moviesStatus, movie = {}, alikeMovies = []}) => {

  if (moviesStatus === OperationStatus.PENDING) {
    return (
      <Container isCentered>
        <SpinnerLoading/>
      </Container>
    );
  }

  if (moviesStatus === OperationStatus.REJECTED) {
    return (
      <Container isCentered>
        <Maintenance/>
      </Container>
    );
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

      <Footer/>
    </div>
  </>;
};

FullMovieCard.propTypes = {
  loginStatus: operationStatusType,
  moviesStatus: operationStatusType,
  movie: movieShape,
  alikeMovies: OriginalMoviesList.propTypes.movies,
};

const mapStateToProps = (state, {movieId}) => {
  return {
    loginStatus: selectLoginStatus(state),
    moviesStatus: selectMoviesStatus(state),
    movie: selectMovieById(state, movieId),
    alikeMovies: selectAlikeMovies(state, movieId),
  };
};

export {FullMovieCard};
export default connect(mapStateToProps)(FullMovieCard);
