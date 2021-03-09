import OperationStatus from '../../constants/operation-status';

import ActionType from '../action-type';
import {setLoginStatus, setUser} from './user-actions';

describe(`User action creators`, () => {

  test(`Action creator for setting login request status creates action with payload equals to transferred operation status`, () => {
    Object.values(OperationStatus).forEach((operationStatus) => {
      const expectedAction = {
        type: ActionType.SET_LOGIN_STATUS,
        payload: operationStatus,
      };
      expect(setLoginStatus(operationStatus)).toEqual(expectedAction);
    });
  });

  test(`Action creator for setting logged in user creates action with payload equals to transferred user`, () => {
    [
      {id: `1`},
      undefined,
      {},
    ].forEach((user) => {
      const expectedAction = {
        type: ActionType.SET_USER,
        payload: user,
      };
      expect(setUser(user)).toEqual(expectedAction);
    });
  });

});
