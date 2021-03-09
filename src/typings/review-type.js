import PropTypes from 'prop-types';

import {userShape} from './user-type';

const reviewType = {
  id: PropTypes.string.isRequired,
  user: userShape,
  rating: PropTypes.number,
  text: PropTypes.string,
  date: PropTypes.string,
};

const reviewShape = PropTypes.shape(reviewType);

export {reviewType, reviewShape};
