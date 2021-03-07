import React, {memo} from 'react';
import PropTypes from 'prop-types';
import range from 'lodash.range';

import './add-review-star-list.css';

const RANGE_OFFSET = 1;

const AddReviewStarList = ({maxRating, isDisabled = false}) => {
  return range(RANGE_OFFSET, RANGE_OFFSET + maxRating)
    .map((value) => {
      const id = `star-${value}`;
      return (
        <React.Fragment key={id}>
          <input className="rating__input" id={id} type="radio" name="rating" value={value} disabled={isDisabled}/>
          <label className="rating__label" htmlFor={id}>Rating {value}</label>
        </React.Fragment>
      );
    });
};

AddReviewStarList.propTypes = {
  maxRating: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
};

export {AddReviewStarList};

export default memo(AddReviewStarList);
