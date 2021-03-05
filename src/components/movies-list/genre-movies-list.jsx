import React from 'react';
import {connect} from 'react-redux';

import OperationStatus from '../../constants/operation-status';

import {selectMoviesStatus} from '../../store/selectors/movie-selectors';
import {selectGenreMovies} from '../../store/selectors/genre-selectors';

import MoviesList, {MoviesList as OriginalMoviesList} from './movies-list';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';
import Container from '../container/container';

import operationStatusType from '../../typings/operation-status-type';

const GenreMoviesList = ({moviesStatus, movies}) => {

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

  return <MoviesList movies={movies}/>;
};

GenreMoviesList.propTypes = {
  moviesStatus: operationStatusType,
  movies: OriginalMoviesList.propTypes.movies,
};

const mapStateToProps = (state) => ({
  moviesStatus: selectMoviesStatus(state),
  movies: selectGenreMovies(state),
});

export default connect(mapStateToProps)(GenreMoviesList);
