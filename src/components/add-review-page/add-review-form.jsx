import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import AddReviewStarList from './add-review-star-list';

const MAX_RATING = 10;

const AddReviewForm = ({movie = {}} = {}) => {
  const {
    secondaryBackgroundStyle,
  } = movie;

  const [text, setText] = useState(``);
  const handleTextChange = useCallback((evt) => {
    setText(evt.target.value);
  }, [setText]);

  const [rating, setRating] = useState(MAX_RATING);
  const handleRatingChange = useCallback((evt) => {
    setRating(+evt.target.value);
  }, [setRating]);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
  }, []);

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars" value={rating} onChange={handleRatingChange}>
          <AddReviewStarList maxRating={MAX_RATING}/>
        </div>
      </div>

      <div className="add-review__text" style={secondaryBackgroundStyle}>

        <textarea className="add-review__textarea"
          name="review-text" id="review-text" placeholder="Review text" required
          value={text} onChange={handleTextChange}/>

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  movie: PropTypes.shape({
    secondaryBackgroundStyle: PropTypes.object,
  }),
};

export default AddReviewForm;
