import React from 'react';
import PropTypes from 'prop-types';
import {generatePath, Link} from 'react-router-dom';

import {MainPath} from '../../constants/paths';
import PosterSize from '../../constants/poster-size';
import {getStyle} from '../../utils/movie-util';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviePoster from '../movie-poster/movie-poster';
import MovieBackground from '../movie-background/movie-background';
import AddReviewForm from './add-review-form';


const AddReviewPage = ({movie} = {}) => {
  const {
    title = ``,
    backgroundColor,
  } = movie;

  return (
    <section className="movie-card movie-card--full" style={getStyle(`backgroundColor`, backgroundColor)}>
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
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
  }).isRequired,
};


export default AddReviewPage;
