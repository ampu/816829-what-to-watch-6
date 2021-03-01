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

export {
  importApiReview,
};
