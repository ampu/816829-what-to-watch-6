import {useEffect, useRef, useState} from 'react';

import OperationStatus from '../constants/operation-status';
import provider from '../providers/provider';

const useMyList = () => {
  const [movies, setMovies] = useState([]);
  const [moviesStatus, setMoviesStatus] = useState(OperationStatus.PENDING);
  const cancellation = useRef(provider.getCancellation()).current;

  useEffect(() => {
    provider.getMyList(cancellation)
      .then((newMovies) => {
        setMovies(newMovies);
        setMoviesStatus(OperationStatus.RESOLVED);
      })
      .catch((_error) => {
        if (cancellation.token.reason) {
          return;
        }
        setMoviesStatus(OperationStatus.REJECTED);
      });

    return () => {
      cancellation.cancel(`Cancelling get my list due to unmount`);
    };
  }, [cancellation]);

  return [moviesStatus, movies];
};

export {
  useMyList,
};
