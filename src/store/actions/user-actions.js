import ActionType from '../action-type';

const setLoginStatus = (loginStatus) => ({type: ActionType.SET_LOGIN_STATUS, payload: loginStatus});
const doSetLoginStatus = (state, loginStatus) => ({...state, loginStatus});

const setUser = (user) => ({type: ActionType.SET_USER, payload: user});
const doSetUser = (state, user) => ({...state, user});

export {
  setLoginStatus, doSetLoginStatus,
  setUser, doSetUser,
};
