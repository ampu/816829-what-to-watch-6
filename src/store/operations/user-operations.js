import OperationStatus from '../../constants/operation-status';
import {setLoginStatus, setUser} from '../actions/user-actions';
import provider from '../../providers/provider';

const getLogin = () => (dispatch) => {
  dispatch(setLoginStatus(OperationStatus.PENDING));

  return provider.getLogin()
    .then((user) => {
      dispatch(setUser(user));
      dispatch(setLoginStatus(OperationStatus.RESOLVED));
    })
    .catch((_error) => {
      dispatch(setLoginStatus(OperationStatus.REJECTED));
    });
};

const postLogin = ({email, password}) => (dispatch) => {
  dispatch(setLoginStatus(OperationStatus.PENDING));

  return provider.postLogin({email, password})
    .then((user) => {
      dispatch(setUser(user));
      dispatch(setLoginStatus(OperationStatus.RESOLVED));
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
