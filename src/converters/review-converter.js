const importApiReview = ({
  id = ``,
  user: {
    id: userId = ``,
    name: userName = ``,
  } = {},
  rating = 0,
  comment: text = ``,
  date = ``,
}) => {
  return {
    id: id.toString(),
    userId,
    userName,
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
