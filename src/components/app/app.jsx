import React, {useCallback} from 'react';
import {Switch, Route} from 'react-router-dom';

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
  const renderFullMovieCard = useCallback(({match}) => {
    return <FullMovieCard key={match.params.id} movieId={match.params.id}/>;
  }, []);

  const renderPlayer = useCallback(({match}) => <Player movieId={match.params.id}/>, []);
  const renderMyList = useCallback(() => <MyList/>, []);
  const renderAddReview = useCallback(({match}) => <AddReviewPage movieId={match.params.id}/>, []);

  return (
    <Switch>
      <Route exact path={MainPath.INDEX}>
        <Main/>
      </Route>
      <Route exact path={MainPath.SIGN_IN}>
        <SignIn/>
      </Route>
      <Route exact path={MOVIE_PATHS} render={renderFullMovieCard}/>
      <Route exact path={MainPath.PLAYER} render={renderPlayer}/>
      <PrivateRoute exact path={MainPath.MY_LIST} render={renderMyList}/>
      <PrivateRoute exact path={MainPath.ADD_REVIEW} render={renderAddReview}/>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  );
};

export default App;
