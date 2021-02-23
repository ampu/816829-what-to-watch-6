import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {MainPath} from '../../constants/paths';

const UserBlock = ({user}) => {
  return (
    <div className="user-block">
      {user
        ? (
          <div className="user-block__avatar">
            <img src={user.avatar} alt="User avatar" width="63" height="63"/>
          </div>
        )
        : <Link to={MainPath.SIGN_IN} className="user-block__link">Sign in</Link>}
    </div>
  );
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }),
};

export default UserBlock;
