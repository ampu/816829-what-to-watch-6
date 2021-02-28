import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import {OperationStatus, OPERATION_STATUSES} from '../../constants/operation-status';
import SpinnerLoading from '../spinner-loading/spinner-loading';

const PrivateRoute = ({exact = true, path, render, loginStatus}) => {

  const doRender = useCallback((routeProps) => {
    if (loginStatus === OperationStatus.PENDING) {
      return <SpinnerLoading/>;
    }
    return loginStatus === OperationStatus.RESOLVED
      ? render(routeProps)
      : <Redirect to={MainPath.SIGN_IN}/>;
  }, [render, loginStatus]);

  return <Route exact={exact} path={path} render={doRender}/>;
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  loginStatus: PropTypes.oneOf(OPERATION_STATUSES),
};

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
