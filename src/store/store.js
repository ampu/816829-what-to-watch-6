import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import Domain from './domain';

import movieReducer from './reducers/movie-reducer';
import userReducer from './reducers/user-reducer';
import genreReducer from './reducers/genre-reducer';

const rootReducer = combineReducers({
  [Domain.MOVIE]: movieReducer,
  [Domain.USER]: userReducer,
  [Domain.GENRE]: genreReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
