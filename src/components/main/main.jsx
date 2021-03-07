import React from 'react';

import PromoMovieCard from '../promo-movie-card/promo-movie-card';
import GenreMoviesList from '../movies-list/genre-movies-list';
import GenresList from '../genres-list/genres-list';
import Footer from '../footer/footer';

const Main = () => {
  return <>
    <PromoMovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList/>

        <GenreMoviesList/>
      </section>

      <Footer/>
    </div>
  </>;
};

export default Main;
