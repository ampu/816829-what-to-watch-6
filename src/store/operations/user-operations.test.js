import MockAdapter from 'axios-mock-adapter';

import ActionType from '../action-type';
import OperationStatus from '../../constants/operation-status';
import provider from '../../providers/provider';
import {getLogin, postLogin} from './user-operations';
import {importApiUser} from '../../converters/user-converter';

const Status = {
  OK: 200,
};

const API_USER_MOCK = {id: `fake`};
const LOCAL_USER_MOCK = {email: `test@test.ru`, password: `123456`};

describe(`User asynchronous operations`, () => {

  it(`Should make a correct API call via GET /login`, () => {
    const clientMock = new MockAdapter(provider.getClient());

    const dispatch = jest.fn();
    const loginLoader = getLogin();

    clientMock.onGet(`/login`)
      .reply(Status.OK, API_USER_MOCK);

    return loginLoader(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOGIN_STATUS,
          payload: OperationStatus.PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER,
          payload: importApiUser(API_USER_MOCK),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_LOGIN_STATUS,
          payload: OperationStatus.RESOLVED,
        });
      });
  });

  it(`Should make a correct API call via POST /login`, () => {
    const clientMock = new MockAdapter(provider.getClient());

    const dispatch = jest.fn();
    const loginLoader = postLogin(LOCAL_USER_MOCK);

    clientMock.onPost(`/login`)
      .reply(Status.OK, API_USER_MOCK);

    return loginLoader(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOGIN_STATUS,
          payload: OperationStatus.PENDING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER,
          payload: importApiUser(API_USER_MOCK),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_LOGIN_STATUS,
          payload: OperationStatus.RESOLVED,
        });
      });
  });
});
