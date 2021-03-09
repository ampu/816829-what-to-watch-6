import MockAdapter from 'axios-mock-adapter';

import ActionType from '../action-type';
import OperationStatus from '../../constants/operation-status';
import provider from '../../providers/provider';
import {importApiMovie, importApiMovies} from '../../converters/movie-converter';
import {getMovies, getPromoMovie} from './movie-operations';

const Status = {
  OK: 200,
};

const API_MOVIE_MOCK = {id: `fake`};
const API_MOVIES_MOCK = [API_MOVIE_MOCK];

describe(`Movie asynchronous operations`, () => {

  it(`Should make a correct API call via GET /films`, () => {
    const clientMock = new MockAdapter(provider.getClient());

    const dispatch = jest.fn();
    const moviesLoader = getMovies();

    clientMock.onGet(`/films`)
      .reply(Status.OK, API_MOVIES_MOCK);

    return moviesLoader(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_MOVIES_STATUS,
          payload: OperationStatus.PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_MOVIES,
          payload: importApiMovies(API_MOVIES_MOCK),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_MOVIES_STATUS,
          payload: OperationStatus.RESOLVED,
        });
      });
  });

  it(`Should make a correct API call via GET /films/promo`, () => {
    const clientMock = new MockAdapter(provider.getClient());

    const dispatch = jest.fn();
    const promoLoader = getPromoMovie();

    clientMock.onGet(`/films/promo`)
      .reply(Status.OK, API_MOVIE_MOCK);

    return promoLoader(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_PROMO_STATUS,
          payload: OperationStatus.PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_PROMO_MOVIE,
          payload: importApiMovie(API_MOVIE_MOCK),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_PROMO_STATUS,
          payload: OperationStatus.RESOLVED,
        });
      });
  });

  it(`Should not make any more API calls via GET /films/promo after a successful one`, () => {
    const clientMock = new MockAdapter(provider.getClient());

    const firstDispatch = jest.fn();
    const secondDispatch = jest.fn();
    const promoLoader = getPromoMovie();

    clientMock.onGet(`/films/promo`)
      .reply(Status.OK, API_MOVIE_MOCK);

    return promoLoader(firstDispatch)
      .then(() => promoLoader(secondDispatch))
      .then(() => {
        expect(secondDispatch).toHaveBeenCalledTimes(0);
      });
  });
});
