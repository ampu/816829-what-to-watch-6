import Domain from '../domain';

const selectLoginStatus = (state) => state[Domain.USER].loginStatus;
const selectUser = (state) => state[Domain.USER].user;

export {
  selectLoginStatus,
  selectUser,
};
