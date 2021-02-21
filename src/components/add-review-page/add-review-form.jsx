import React from 'react';

import {getStyle} from '../../utils/movie-util';
import PropTypes from 'prop-types';


const MAX_RATING = 10;


const AddReviewForm = ({movie = {}} = {}) => {
  const {
    backgroundColor,
  } = movie;

  const [rating, setRating] = React.useState(MAX_RATING);
  const [text, setText] = React.useState(``);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
  };

  const stars = Array.from({length: MAX_RATING}, (_, i) => {
    const value = i + 1;
    const id = `star-${value}`;

    return <React.Fragment key={value}>
      <input className="rating__input" id={id} type="radio" name="rating" value={value}/>
      <label className="rating__label" htmlFor={id}>Rating {value}</label>
    </React.Fragment>;
  });

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars" value={rating} onChange={(evt) => setRating(+evt.target.value)}>
          {stars}
        </div>
      </div>

      <div className="add-review__text" style={getStyle(`backgroundColor`, backgroundColor, true)}>
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" required value={text} onChange={(evt) => setText(evt.target.value)}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  movie: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
};


export default AddReviewForm;
