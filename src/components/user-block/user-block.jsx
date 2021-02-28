import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {MainPath} from '../../constants/paths';
import {OperationStatus, OPERATION_STATUSES} from '../../constants/operation-status';

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

      {[OperationStatus.UNSET, OperationStatus.REJECTED].includes(loginStatus) && (
        <Link to={MainPath.SIGN_IN} className="user-block__link">Sign in</Link>
      )}
    </div>
  );
};

UserBlock.propTypes = {
  loginStatus: PropTypes.oneOf(OPERATION_STATUSES),
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
  user: state.user,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
