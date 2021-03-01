import {matchPath, useLocation} from 'react-router-dom';

const useMatchPath = (path, exact = true) => {
  return matchPath(useLocation().pathname, {exact, path});
};

export {
  useMatchPath,
};
