import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';

const UserRoute = ({exact = true, path, render, user}) => {

  const doRender = useCallback((routeProps) => {
    return user
      ? render(routeProps)
      : <Redirect to={MainPath.SIGN_IN}/>;
  }, [render, user]);

  return (
    <Route exact={exact} path={path} render={doRender}/>
  );
};

UserRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  user: PropTypes.object,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export {UserRoute};
export default connect(mapStateToProps)(UserRoute);
