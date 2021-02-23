import React from 'react';

import Logo from '../logo/logo';
import MovieCard from '../movie-card/movie-card';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';

const Main = ({promoMovie = {}, movies = []}) => {
  return <>
    <MovieCard movie={promoMovie}/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList/>

        <MoviesList movies={movies}/>

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
  movies: MoviesList.propTypes.movies,
};

export default Main;
