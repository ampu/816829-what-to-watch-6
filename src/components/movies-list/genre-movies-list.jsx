import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OperationStatus from '../../constants/operation-status';
import {selectGenreMovies} from '../../store/selectors';

import MoviesList from './movies-list';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';

const GenreMoviesList = ({moviesStatus, movies}) => {

  if (moviesStatus === OperationStatus.PENDING) {
    return <SpinnerLoading/>;
  }

  if (moviesStatus === OperationStatus.REJECTED) {
    return <Maintenance/>;
  }

  return <MoviesList movies={movies}/>;
};

GenreMoviesList.propTypes = {
  moviesStatus: PropTypes.oneOf(Object.values(OperationStatus)),
  movies: MoviesList.propTypes.movies,
};

const mapStateToProps = (state) => ({
  moviesStatus: state.moviesStatus,
  movies: selectGenreMovies(state),
});

export default connect(mapStateToProps)(GenreMoviesList);
