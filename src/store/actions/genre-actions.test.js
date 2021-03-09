import ActionType from '../action-type';
import {setGenre} from './genre-actions';

describe(`Genre action creators`, () => {

  test(`Action creator for setting genre creates action with payload equals to transferred genre`, () => {
    [`my genre`, undefined, ``].forEach((genre) => {
      const expectedAction = {
        type: ActionType.SET_GENRE,
        payload: genre,
      };
      expect(setGenre(genre)).toEqual(expectedAction);
    });
  });

});
