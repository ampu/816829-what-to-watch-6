import React from 'react';

import Logo from '../logo/logo';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';

const MyList = ({movies = []}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList movies={movies}/>
      </section>

      <footer className="page-footer">
        <Logo isLight={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  movies: MoviesList.propTypes.movies,
};

export default MyList;
