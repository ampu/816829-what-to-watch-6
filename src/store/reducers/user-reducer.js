import ActionType from '../action-type';
import {doSetLoginStatus, doSetUser} from '../actions/user-actions';
import OperationStatus from '../../constants/operation-status';

const INITIAL_STATE = {
  loginStatus: OperationStatus.UNSET,
  user: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.SET_LOGIN_STATUS:
      return doSetLoginStatus(state, action.payload);

    case ActionType.SET_USER:
      return doSetUser(state, action.payload);
  }
  return state;
};
