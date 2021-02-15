import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import RoutePath from '../../data/route-path';


const UserBlock = ({user}) => {
  const signInElement = <Link to={RoutePath.SIGN_IN} className="user-block__link">Sign in</Link>;

  const userElement = user &&
    <div className="user-block__avatar">
      <img src={user.avatar} alt="User avatar" width="63" height="63"/>
    </div>;

  return (
    <div className="user-block">
      {userElement || signInElement}
    </div>
  );
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }),
};


export default UserBlock;
