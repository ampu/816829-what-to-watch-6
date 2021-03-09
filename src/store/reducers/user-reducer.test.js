import OperationStatus from '../../constants/operation-status';

import ActionType from '../action-type';
import userReducer from './user-reducer';

describe(`Movie reducer`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(userReducer(undefined, {}))
      .toEqual({
        loginStatus: OperationStatus.UNSET,
        user: undefined,
      });
  });

  test(`Reducer should update login request status by setting appropriate operation status`, () => {
    Object.values(OperationStatus).forEach((operationStatus) => {
      const action = {
        type: ActionType.SET_LOGIN_STATUS,
        payload: operationStatus,
      };
      expect(userReducer(undefined, action))
        .toEqual({
          loginStatus: operationStatus,
          user: undefined,
        });
    });
  });

  test(`Reducer should update user state by setting appropriate user value`, () => {
    [
      {id: `1`},
      undefined,
      {},
    ].forEach((user) => {
      const action = {
        type: ActionType.SET_USER,
        payload: user,
      };
      expect(userReducer(undefined, action))
        .toEqual({
          loginStatus: OperationStatus.UNSET,
          user,
        });
    });
  });

});
