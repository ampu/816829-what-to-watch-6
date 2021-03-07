import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {selectLoginStatus} from '../../store/selectors/user-selectors';

import {MainPath} from '../../constants/paths';
import OperationStatus from '../../constants/operation-status';
import SpinnerLoading from '../spinner-loading/spinner-loading';
import Container from '../container/container';

import operationStatusType from '../../typings/operation-status-type';

const PrivateRoute = ({loginStatus, exact = true, path, render}) => {

  const doRender = useCallback((routeProps) => {
    if (loginStatus === OperationStatus.PENDING) {
      return (
        <Container isCentered>
          <SpinnerLoading/>
        </Container>
      );
    }
    return loginStatus === OperationStatus.RESOLVED
      ? render(routeProps)
      : <Redirect to={MainPath.SIGN_IN}/>;
  }, [render, loginStatus]);

  return <Route exact={exact} path={path} render={doRender}/>;
};

PrivateRoute.propTypes = {
  loginStatus: operationStatusType,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loginStatus: selectLoginStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
