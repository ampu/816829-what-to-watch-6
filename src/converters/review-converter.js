import {importApiUser} from './user-converter';

const importApiReview = ({
  id = ``,
  user = {},
  rating = 0,
  comment: text = ``,
  date = ``,
}) => {
  return {
    id: id.toString(),
    user: importApiUser(user),
    rating,
    text,
    date,
  };
};

const importApiReviews = (apiReviews) => apiReviews.map(importApiReview);

const exportApiReview = ({
  rating = 0,
  text: comment = ``,
}) => {
  return {
    rating,
    comment,
  };
};

export {
  importApiReview,
  importApiReviews,
  exportApiReview,
};
