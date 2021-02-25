import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store';
import {setMovies, syncGenreMovies, syncGenres} from './store/actions';
import {generateMovies, generatePromoMovie} from './mocks/movie-mock';
import {ensureWithReviews} from './mocks/review-mock';

import App from './components/app/app';

const promoMovie = ensureWithReviews(generatePromoMovie());
const movies = generateMovies().map(ensureWithReviews);

store.dispatch(setMovies(movies));
store.dispatch(syncGenres());
store.dispatch(syncGenreMovies());

ReactDOM.render((
  <Provider store={store}>
    <App promoMovie={promoMovie} movies={movies}/>
  </Provider>
), document.querySelector(`#root`));
