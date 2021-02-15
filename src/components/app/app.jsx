import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import RoutePath from '../../data/route-path';

import Main from '../main/main';
import NotFound from '../not-found/not-found';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MovieDetails from '../movie-details/movie-details';
import AddReview from '../add-review/add-review';
import Player from '../player/player';


const App = ({promoMovie = {}, movies = []}) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={RoutePath.MAIN}>
          <Main promoMovie={promoMovie} movies={movies}/>
        </Route>
        <Route exact path={RoutePath.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route exact path={RoutePath.MY_LIST}>
          <MyList/>
        </Route>
        <Route exact path={RoutePath.MOVIE}>
          <MovieDetails/>
        </Route>
        <Route exact path={RoutePath.ADD_REVIEW}>
          <AddReview/>
        </Route>
        <Route exact path={RoutePath.PLAYER}>
          <Player/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </HashRouter>
  );
};

App.propTypes = Main.propTypes;


export default App;
