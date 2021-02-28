import React from 'react';
import PropTypes from 'prop-types';
import {generatePath, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import PosterSize from '../../constants/poster-size';
import OperationStatus from '../../constants/operation-status';
import {selectMovieById} from '../../store/selectors';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviePoster from '../movie-poster/movie-poster';
import MovieBackground from '../movie-background/movie-background';
import AddReviewForm from './add-review-form';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';

const AddReviewPage = ({moviesStatus, movie} = {}) => {

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
  moviesStatus: PropTypes.oneOf(Object.values(OperationStatus)),
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    primaryBackgroundStyle: PropTypes.object,
  }),
};

const mapStateToProps = (state, {movieId}) => {
  return {
    moviesStatus: state.moviesStatus,
    movie: selectMovieById(state, movieId),
  };
};

export {AddReviewPage};
export default connect(mapStateToProps)(AddReviewPage);
