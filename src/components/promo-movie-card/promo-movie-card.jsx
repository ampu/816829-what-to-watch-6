import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import getClassName from 'classnames';

import {DEFAULT_BACKGROUND_STYLE} from '../../constants/styles';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviePoster from '../movie-poster/movie-poster';
import MovieDescription from '../movie-description/movie-description';
import MovieBackground from '../movie-background/movie-background';

import './promo-movie-card.css';

const PromoMovieCard = ({movie = {}}) => {
  const {
    title = ``,
    primaryBackgroundStyle = DEFAULT_BACKGROUND_STYLE,
  } = movie;

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

        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <MoviePoster movie={movie}/>

          <MovieDescription movie={movie}/>
        </div>
      </div>
    </section>
  );
};

PromoMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    primaryBackgroundStyle: PropTypes.object,
  }),
};

const mapStateToProps = (state) => ({
  movie: state.promoMovie,
});

export {PromoMovieCard};
export default connect(mapStateToProps)(PromoMovieCard);
