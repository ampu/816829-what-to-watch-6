import {importApiMovie} from '../converters/movie-converter';

import API_FILMS from './api/films.json';
import API_FILMS_PROMO from './api/promo.json';


const MOVIES_CAPACITY = 8;


const generateMovies = () => {
  return API_FILMS.slice(0, MOVIES_CAPACITY).map(importApiMovie);
};

const generatePromoMovie = () => {
  return importApiMovie(API_FILMS_PROMO);
};


export {
  generateMovies,
  generatePromoMovie,
};
