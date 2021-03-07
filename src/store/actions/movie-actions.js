import ActionType from '../action-type';

const setMoviesStatus = (moviesStatus) => ({type: ActionType.SET_MOVIES_STATUS, payload: moviesStatus});
const doSetMoviesStatus = (state, moviesStatus) => ({...state, moviesStatus});

const setMovies = (movies) => ({type: ActionType.SET_MOVIES, payload: movies});
const doSetMovies = (state, movies) => ({...state, movies});

const setPromoStatus = (promoStatus) => ({type: ActionType.SET_PROMO_STATUS, payload: promoStatus});
const doSetPromoStatus = (state, promoStatus) => ({...state, promoStatus});

const setPromoMovie = (promoMovie) => ({type: ActionType.SET_PROMO_MOVIE, payload: promoMovie});
const doSetPromoMovie = (state, promoMovie) => ({...state, promoMovie});

export {
  setMoviesStatus, doSetMoviesStatus,
  setMovies, doSetMovies,
  setPromoStatus, doSetPromoStatus,
  setPromoMovie, doSetPromoMovie,
};
