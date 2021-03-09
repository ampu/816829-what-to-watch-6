import React, {useState, useCallback} from 'react';
import {Redirect, generatePath} from 'react-router-dom';
import PropTypes from 'prop-types';
import getClassName from 'classnames';

import {usePostReview} from '../../hooks/use-post-review';
import OperationStatus from '../../constants/operation-status';
import {MoviePath} from '../../constants/paths';

import AddReviewStarList from './add-review-star-list';

import {movieType} from '../../typings/movie-type';

import './add-review-form.css';

const MAX_RATING = 10;

const AddReviewForm = ({movie}) => {
  const [text, setText] = useState(``);
  const handleTextChange = useCallback((evt) => {
    setText(evt.target.value);
  }, [setText]);

  const [rating, setRating] = useState(MAX_RATING);
  const handleRatingChange = useCallback((evt) => {
    setRating(+evt.target.value);
  }, [setRating]);

  const [postReviewStatus, postReview] = usePostReview(movie.id);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    postReview({rating, text});
  }, [postReview, rating, text]);

  if (postReviewStatus === OperationStatus.RESOLVED) {
    return <Redirect to={generatePath(MoviePath.MOVIE_REVIEWS, movie)}/>;
  }

  const isDisabled = postReviewStatus === OperationStatus.PENDING;

  const formClassMap = {
    [`add-review__form`]: true,
    [`add-review__form--disabled`]: isDisabled,
  };

  const textClassMap = {
    [`add-review__text`]: true,
    [`add-review__text--disabled`]: isDisabled,
  };

  return (
    <form action="#" className={getClassName(formClassMap)} onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars" value={rating} onChange={handleRatingChange}>
          <AddReviewStarList maxRating={MAX_RATING} isDisabled={isDisabled}/>
        </div>
      </div>

      <div className={getClassName(textClassMap)}>

        <textarea className="add-review__textarea"
          name="review-text" id="review-text" placeholder="Review text" required
          value={text} onChange={handleTextChange} disabled={isDisabled}/>

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isDisabled}>
            {isDisabled ? `Posting` : `Post`}
          </button>
        </div>
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  movie: PropTypes.shape({
    id: movieType.id,
  }).isRequired,
};

export default AddReviewForm;
