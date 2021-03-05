import PropTypes from 'prop-types';

import OperationStatus from '../constants/operation-status';

export default PropTypes.oneOf(Object.values(OperationStatus));
