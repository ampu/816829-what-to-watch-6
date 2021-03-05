const importApiUser = ({
  id = ``,
  email = ``,
  name = ``,
  avatar_url: avatar = ``,
}) => {
  return {
    id: id.toString(),
    email,
    name,
    avatar,
  };
};

export {
  importApiUser,
};
