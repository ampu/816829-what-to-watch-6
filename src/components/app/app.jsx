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
import PrivateRoute from '../private-route/private-route';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={MainPath.INDEX}>
          <Main/>
        </Route>
        <Route exact path={MainPath.SIGN_IN}>
          <SignIn/>
        </Route>
        <PrivateRoute exact path={MainPath.MY_LIST} render={() => <MyList/>}/>
        <Route exact path={MOVIE_PATHS} render={({match}) => <FullMovieCard movieId={match.params.id}/>}/>
        <Route exact path={MainPath.ADD_REVIEW} render={({match}) => <AddReviewPage movieId={match.params.id}/>}/>
        <Route exact path={MainPath.PLAYER} render={({match}) => <Player movieId={match.params.id}/>}/>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
