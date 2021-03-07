import {useEffect, useState} from 'react';

import OperationStatus from '../constants/operation-status';
import provider from '../providers/provider';

const useMyList = () => {
  const [movies, setMovies] = useState([]);
  const [moviesStatus, setMoviesStatus] = useState(OperationStatus.PENDING);
  const [cancellation] = useState(provider.getCancellation());

  useEffect(() => {
    provider.getMyList(cancellation)
      .then((newMovies) => {
        setMovies(newMovies);
        setMoviesStatus(OperationStatus.RESOLVED);
      })
      .catch((error) => {
        if (provider.isCancelled(error)) {
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
