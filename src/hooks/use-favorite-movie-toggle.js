import {useState, useCallback, useEffect} from 'react';

import OperationStatus from '../constants/operation-status';
import provider from '../providers/provider';

const useFavoriteMovieToggle = (movieId) => {
  const [status, setStatus] = useState(OperationStatus.UNSET);
  const [isActive, setActive] = useState();
  const [cancellation] = useState(provider.getCancellation());

  const toggleFavorite = useCallback((force) => {
    setStatus(OperationStatus.PENDING);
    provider.toggleFavoriteMovie(movieId, force, cancellation)
      .then((movie) => {
        setActive(movie.isFavorite);
        setStatus(OperationStatus.RESOLVED);
      })
      .catch((error) => {
        if (provider.isCancelled(error)) {
          return;
        }
        setStatus(OperationStatus.REJECTED);
      });
  }, [cancellation, movieId]);

  useEffect(() => () => {
    cancellation.cancel(`Cancelling toggle favorite movie due to unmount`);
  }, [cancellation]);

  return [status, toggleFavorite, isActive];
};

export {
  useFavoriteMovieToggle,
};
