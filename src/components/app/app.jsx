import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import {MainPath, MOVIE_PATHS} from '../../constants/paths';

import Main from '../main/main';
import NotFound from '../not-found/not-found';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FullMovieCard from '../full-movie-card/full-movie-card';
import AddReviewPage from '../add-review-page/add-review-page';
import Player from '../player/player';

const App = ({promoMovie = {}, movies = []}) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={MainPath.INDEX}>
          <Main promoMovie={promoMovie} movies={movies}/>
        </Route>
        <Route exact path={MainPath.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route exact path={MainPath.MY_LIST}>
          <MyList movies={movies}/>
        </Route>
        <Route exact path={MOVIE_PATHS}>
          <FullMovieCard movies={movies} movie={promoMovie}/>
        </Route>
        <Route exact path={MainPath.ADD_REVIEW}>
          <AddReviewPage movie={promoMovie}/>
        </Route>
        <Route exact path={MainPath.PLAYER}>
          <Player movie={promoMovie}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </HashRouter>
  );
};

App.propTypes = {
  promoMovie: FullMovieCard.propTypes.movie,
  movies: MyList.propTypes.movies,
};

export default App;
