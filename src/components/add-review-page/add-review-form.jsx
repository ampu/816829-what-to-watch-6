import React, {useState, useCallback} from 'react';

import {SECONDARY_BACKGROUND_STYLE} from '../../constants/styles';

import AddReviewStarList from './add-review-star-list';

const MAX_RATING = 10;

const AddReviewForm = () => {
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

      <div className="add-review__text" style={SECONDARY_BACKGROUND_STYLE}>

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

export default AddReviewForm;
