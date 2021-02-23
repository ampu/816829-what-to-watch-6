import React from 'react';
import PropTypes from 'prop-types';

const AddReviewStarList = ({maxRating}) => {
  return Array.from({length: maxRating}, (_, i) => {
    const value = i + 1;
    const id = `star-${value}`;

    return (
      <React.Fragment key={value}>
        <input className="rating__input" id={id} type="radio" name="rating" value={value}/>
        <label className="rating__label" htmlFor={id}>Rating {value}</label>
      </React.Fragment>
    );
  });
};

AddReviewStarList.propTypes = {
  maxRating: PropTypes.number.isRequired,
};

export default AddReviewStarList;
