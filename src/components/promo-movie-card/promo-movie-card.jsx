import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import getClassName from 'classnames';

import OperationStatus from '../../constants/operation-status';
import {DEFAULT_BACKGROUND_STYLE} from '../../constants/styles';
import {selectPromoMovie, selectPromoStatus} from '../../store/selectors/movie-selectors';
import {getPromoMovie} from '../../store/operations/movie-operations';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviePoster from '../movie-poster/movie-poster';
import MovieDescription from '../movie-description/movie-description';
import MovieBackground from '../movie-background/movie-background';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Container from '../container/container';

import {movieShape} from '../../typings/movie-type';
import operationStatusType from '../../typings/operation-status-type';

import './promo-movie-card.css';

const PromoMovieCard = ({onMounted, movieStatus, movie = {}}) => {
  const {
    title = ``,
    primaryBackgroundStyle = DEFAULT_BACKGROUND_STYLE,
  } = movie;

  useEffect(() => {
    onMounted();
  }, [onMounted]);

  const isEmpty = !movie.id;

  const classMap = {
    [`movie-card`]: true,
    [`movie-card--empty`]: isEmpty,
  };

  const headerClassMap = {
    [`page-header`]: true,
    [`movie-card__head`]: true,
    [`movie-card__head--empty`]: isEmpty,
  };

  return (
    <section className={getClassName(classMap)} style={primaryBackgroundStyle}>
      <MovieBackground movie={movie}/>

      <h1 className="visually-hidden">{title}</h1>

      <header className={getClassName(headerClassMap)}>
        <Logo/>

        {movieStatus === OperationStatus.PENDING && (
          <Container isCentered isAbsolute>
            <SpinnerLoading/>
          </Container>
        )}

        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <MoviePoster movie={movie}/>

          {movie.id && <MovieDescription movie={movie}/>}
        </div>
      </div>
    </section>
  );
};

PromoMovieCard.propTypes = {
  onMounted: PropTypes.func.isRequired,
  movieStatus: operationStatusType,
  movie: movieShape,
};

const mapStateToProps = (state) => ({
  movieStatus: selectPromoStatus(state),
  movie: selectPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMounted() {
    return dispatch(getPromoMovie());
  },
});

export {PromoMovieCard};
export default connect(mapStateToProps, mapDispatchToProps)(PromoMovieCard);
