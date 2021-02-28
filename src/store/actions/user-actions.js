import ActionType from '../../constants/action-type';

const setLoginStatus = (loginStatus) => ({type: ActionType.SET_LOGIN_STATUS, payload: loginStatus});
const doSetLoginStatus = (state, loginStatus) => ({...state, loginStatus});

const setUser = (user) => ({type: ActionType.SET_USER, payload: user});
const doSetUser = (state, user) => ({...state, user});

const setMyListStatus = (myListStatus) => ({type: ActionType.SET_MY_LIST_STATUS, payload: myListStatus});
const doSetMyListStatus = (state, myListStatus) => ({...state, myListStatus});

const setMyList = (myMovies) => ({type: ActionType.SET_MY_LIST, payload: myMovies});
const doSetMyList = (state, myMovies) => ({...state, myMovies});

export {
  setLoginStatus, doSetLoginStatus,
  setUser, doSetUser,
  setMyListStatus, doSetMyListStatus,
  setMyList, doSetMyList,
};
