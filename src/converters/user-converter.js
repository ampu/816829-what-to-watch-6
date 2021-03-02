const importApiUser = ({
  id = 0,
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
