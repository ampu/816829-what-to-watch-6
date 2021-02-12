import React from 'react';
import ReactDOM from 'react-dom';

import {generateMovies, generatePromoMovie} from './data/mock/movie';

import App from './components/app/app';


const promoMovie = generatePromoMovie();
const movies = generateMovies();


ReactDOM.render(<App promoMovie={promoMovie} movies={movies}/>, document.querySelector(`#root`));
