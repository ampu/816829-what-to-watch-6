import React from 'react';
import {generatePath, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import PosterSize from '../../constants/poster-size';
import OperationStatus from '../../constants/operation-status';
import {selectMovieById, selectMoviesStatus} from '../../store/selectors/movie-selectors';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviePoster from '../movie-poster/movie-poster';
import MovieBackground from '../movie-background/movie-background';
import AddReviewForm from './add-review-form';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';
import Container from '../container/container';

import operationStatusType from '../../typings/operation-status-type';
import {movieShape} from '../../typings/movie-type';

const AddReviewPage = ({moviesStatus, movie = {}} = {}) => {

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
    title = ``,
    primaryBackgroundStyle,
  } = movie;

  return (
    <section className="movie-card movie-card--full" style={primaryBackgroundStyle}>
      <div className="movie-card__header">
        <MovieBackground movie={movie}/>

        <h1 className="visually-hidden">{title}</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={generatePath(MainPath.MOVIE, movie)}>{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <MoviePoster movie={movie} size={PosterSize.SMALL}/>
      </div>

      <div className="add-review">
        <AddReviewForm movie={movie}/>
      </div>
    </section>
  );
};

AddReviewPage.propTypes = {
  moviesStatus: operationStatusType,
  movie: movieShape,
};

const mapStateToProps = (state, {movieId}) => {
  return {
    moviesStatus: selectMoviesStatus(state),
    movie: selectMovieById(state, movieId),
  };
};

export {AddReviewPage};
export default connect(mapStateToProps)(AddReviewPage);
