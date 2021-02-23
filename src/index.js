import React from 'react';
import ReactDOM from 'react-dom';

import {generateMovies, generatePromoMovie} from './mocks/movie-mock';
import {ensureWithReviews} from './mocks/review-mock';

import App from './components/app/app';

const promoMovie = ensureWithReviews(generatePromoMovie());
const movies = generateMovies().map(ensureWithReviews);

ReactDOM.render(<App promoMovie={promoMovie} movies={movies}/>, document.querySelector(`#root`));
