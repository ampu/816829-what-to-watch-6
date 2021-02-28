const importApiUser = ({
  id = 0,
  email = ``,
  name = ``,
  avatar_url: avatar = ``,
}) => {
  return {
    id,
    email,
    name,
    avatar,
  };
};

export {
  importApiUser,
};
