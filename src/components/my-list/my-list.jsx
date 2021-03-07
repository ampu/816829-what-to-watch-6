import React from 'react';

import OperationStatus from '../../constants/operation-status';
import {useMyList} from '../../hooks/use-my-list';

import Logo from '../logo/logo';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import Footer from '../footer/footer';
import Container from '../container/container';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Maintenance from '../maintenance/maintenance';

const MyList = () => {

  const [moviesStatus, movies] = useMyList();

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {moviesStatus === OperationStatus.PENDING && (
          <Container isCentered>
            <SpinnerLoading/>
          </Container>
        )}

        {moviesStatus === OperationStatus.REJECTED && (
          <Container isCentered>
            <Maintenance>
              Your list is temporary unavailable...
            </Maintenance>
          </Container>
        )}

        {moviesStatus === OperationStatus.RESOLVED && movies.length === 0 && (
          <Container isCentered>
            <div>There are no movies in your list...</div>
          </Container>
        )}

        {moviesStatus === OperationStatus.RESOLVED && movies.length > 0 && <MoviesList movies={movies}/>}
      </section>

      <Footer/>
    </div>
  );
};

export default MyList;
