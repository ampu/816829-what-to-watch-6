import OperationStatus from '../../constants/operation-status';

import ActionType from '../action-type';
import movieReducer from './movie-reducer';

describe(`Movie reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(movieReducer(undefined, {}))
      .toEqual({
        moviesStatus: OperationStatus.UNSET,
        movies: [],
        promoStatus: OperationStatus.UNSET,
        promoMovie: undefined,
      });
  });

  test(`Reducer should update movies request status by setting appropriate operation status`, () => {
    Object.values(OperationStatus).forEach((operationStatus) => {
      const action = {
        type: ActionType.SET_MOVIES_STATUS,
        payload: operationStatus,
      };
      expect(movieReducer(undefined, action))
        .toEqual({
          moviesStatus: operationStatus,
          movies: [],
          promoStatus: OperationStatus.UNSET,
          promoMovie: undefined,
        });
    });
  });

  test(`Reducer should update movies state by setting appropriate movies value`, () => {
    [
      [`my movie #1`, `my movie #2`],
      undefined,
      [],
    ].forEach((movies) => {
      const action = {
        type: ActionType.SET_MOVIES,
        payload: movies,
      };
      expect(movieReducer(undefined, action))
        .toEqual({
          moviesStatus: OperationStatus.UNSET,
          movies,
          promoStatus: OperationStatus.UNSET,
          promoMovie: undefined,
        });
    });
  });

  test(`Reducer should update promo request status by setting appropriate operation status`, () => {
    Object.values(OperationStatus).forEach((operationStatus) => {
      const action = {
        type: ActionType.SET_PROMO_STATUS,
        payload: operationStatus,
      };
      expect(movieReducer(undefined, action))
        .toEqual({
          moviesStatus: OperationStatus.UNSET,
          movies: [],
          promoStatus: operationStatus,
          promoMovie: undefined,
        });
    });
  });

  test(`Reducer should update promo movie state by setting appropriate promo movie value`, () => {
    [
      {id: `1`},
      undefined,
      {},
    ].forEach((promoMovie) => {
      const action = {
        type: ActionType.SET_PROMO_MOVIE,
        payload: promoMovie,
      };
      expect(movieReducer(undefined, action))
        .toEqual({
          moviesStatus: OperationStatus.UNSET,
          movies: [],
          promoStatus: OperationStatus.UNSET,
          promoMovie,
        });
    });
  });

});
