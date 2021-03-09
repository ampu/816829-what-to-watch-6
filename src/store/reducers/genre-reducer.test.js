import {ALL_GENRES} from '../../constants/genre';

import ActionType from '../action-type';
import genreReducer from './genre-reducer';

describe(`Genre reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(genreReducer(undefined, {}))
      .toEqual({genre: ALL_GENRES});
  });

  test(`Reducer should update active genre by setting genre`, () => {
    [`my genre`, undefined, ``].forEach((genre) => {
      const action = {
        type: ActionType.SET_GENRE,
        payload: genre,
      };
      expect(genreReducer(undefined, action))
        .toEqual({genre});
    });
  });

});
