import PropTypes from 'prop-types';

const userType = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

const userShape = PropTypes.shape(userType);

export {userType, userShape};
