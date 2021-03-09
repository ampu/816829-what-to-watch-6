import {batch} from 'react-redux';

import OperationStatus from '../../constants/operation-status';
import {setLoginStatus, setUser} from '../actions/user-actions';
import provider from '../../providers/provider';

const getLogin = () => doGetLogin;

const doGetLogin = async (dispatch) => {
  dispatch(setLoginStatus(OperationStatus.PENDING));

  return provider.getLogin()
    .then((user) => {
      batch(() => {
        dispatch(setUser(user));
        dispatch(setLoginStatus(OperationStatus.RESOLVED));
      });
    })
    .catch((_error) => {
      dispatch(setLoginStatus(OperationStatus.REJECTED));
    });
};

const postLogin = ({email, password}) => async (dispatch) => {
  dispatch(setLoginStatus(OperationStatus.PENDING));

  return provider.postLogin({email, password})
    .then((user) => {
      batch(() => {
        dispatch(setUser(user));
        dispatch(setLoginStatus(OperationStatus.RESOLVED));
      });
    })
    .catch((error) => {
      dispatch(setLoginStatus(OperationStatus.REJECTED));
      throw error;
    });
};

export {
  getLogin,
  postLogin,
};
