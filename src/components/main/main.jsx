import React from 'react';

import Logo from '../logo/logo';
import MovieCard from '../movie-card/movie-card';
import GenreMoviesList from '../movies-list/genre-movies-list';
import GenresList from '../genres-list/genres-list';

const Main = ({promoMovie = {}}) => {
  return <>
    <MovieCard movie={promoMovie}/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList/>

        <GenreMoviesList/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <Logo isLight={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

Main.propTypes = {
  promoMovie: MovieCard.propTypes.movie,
};

export default Main;
