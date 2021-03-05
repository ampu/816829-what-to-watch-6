import ApiProvider from './api-provider';

import OperationStatus from '../constants/operation-status';
import {setLoginStatus, setUser} from '../store/actions/user-actions';
import store from '../store/store';

const provider = new ApiProvider(() => {
  store.dispatch(setLoginStatus(OperationStatus.REJECTED));
  store.dispatch(setUser(undefined));
});

export default provider;
