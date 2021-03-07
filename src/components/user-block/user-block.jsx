import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import OperationStatus from '../../constants/operation-status';
import {selectLoginStatus, selectUser} from '../../store/selectors/user-selectors';

import operationStatusType from '../../typings/operation-status-type';
import userType from '../../typings/user-type';

const UserBlock = ({loginStatus, user}) => {
  return (
    <div className="user-block">
      {loginStatus === OperationStatus.RESOLVED && (
        <div className="user-block__avatar">
          <Link to={MainPath.MY_LIST}>
            <img src={user.avatar} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      )}

      {loginStatus === OperationStatus.REJECTED && (
        <Link to={MainPath.SIGN_IN} className="user-block__link">Sign in</Link>
      )}
    </div>
  );
};

UserBlock.propTypes = {
  loginStatus: operationStatusType,
  user: PropTypes.shape({
    avatar: userType.avatar.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  loginStatus: selectLoginStatus(state),
  user: selectUser(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
