import {importApiReview} from '../converters/review-converter';

import API_COMMENTS from './api/comments.json';

const generateReviews = () => {
  return API_COMMENTS.map(importApiReview);
};

const ensureWithReviews = (state) => {
  if (!state.reviews) {
    state.reviews = generateReviews();
  }
  return state;
};

export {
  generateReviews,
  ensureWithReviews,
};
