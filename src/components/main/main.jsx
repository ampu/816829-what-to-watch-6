import React from 'react';

import Logo from '../logo/logo';
import PromoMovieCard from '../promo-movie-card/promo-movie-card';
import GenreMoviesList from '../movies-list/genre-movies-list';
import GenresList from '../genres-list/genres-list';

const Main = () => {
  return <>
    <PromoMovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList/>

        <GenreMoviesList/>
      </section>

      <footer className="page-footer">
        <Logo isLight/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

export default Main;
