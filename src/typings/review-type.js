import PropTypes from 'prop-types';

import userType from './user-type';

export default {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape(userType),
  rating: PropTypes.number,
  text: PropTypes.string,
  date: PropTypes.string,
};
