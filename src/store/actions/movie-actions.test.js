import OperationStatus from '../../constants/operation-status';

import ActionType from '../action-type';
import {setMovies, setMoviesStatus, setPromoMovie, setPromoStatus} from './movie-actions';

describe(`Movie action creators`, () => {

  test(`Action creator for setting movies request status creates action with payload equals to transferred operation status`, () => {
    Object.values(OperationStatus).forEach((operationStatus) => {
      const expectedAction = {
        type: ActionType.SET_MOVIES_STATUS,
        payload: operationStatus,
      };
      expect(setMoviesStatus(operationStatus)).toEqual(expectedAction);
    });
  });

  test(`Action creator for setting movies creates action with payload equals to transferred movies`, () => {
    [
      [`my movie #1`, `my movie #2`],
      undefined,
      [],
    ].forEach((movies) => {
      const expectedAction = {
        type: ActionType.SET_MOVIES,
        payload: movies,
      };
      expect(setMovies(movies)).toEqual(expectedAction);
    });
  });

  test(`Action creator for setting promo movie request status creates action with payload equals to transferred operation status`, () => {
    Object.values(OperationStatus).forEach((operationStatus) => {
      const expectedAction = {
        type: ActionType.SET_PROMO_STATUS,
        payload: operationStatus,
      };
      expect(setPromoStatus(operationStatus)).toEqual(expectedAction);
    });
  });

  test(`Action creator for setting promo movie creates action with payload equals to transferred promo movie`, () => {
    [
      {id: `1`},
      undefined,
      {},
    ].forEach((movie) => {
      const expectedAction = {
        type: ActionType.SET_PROMO_MOVIE,
        payload: movie,
      };
      expect(setPromoMovie(movie)).toEqual(expectedAction);
    });
  });

});
