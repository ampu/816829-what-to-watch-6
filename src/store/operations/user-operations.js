import {OperationStatus} from '../../constants/operation-status';
import {setLoginStatus, setMyList, setMyListStatus, setUser} from '../actions/user-actions';
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

const getMyList = () => (dispatch) => {
  dispatch(setMyListStatus(OperationStatus.PENDING));

  return provider.getMyList()
    .then((myMovies) => {
      dispatch(setMyList(myMovies));
      dispatch(setMyListStatus(OperationStatus.RESOLVED));
    })
    .catch((_error) => {
      dispatch(setMyListStatus(OperationStatus.REJECTED));
    });
};

export {
  getLogin,
  postLogin,
  getMyList,
};
