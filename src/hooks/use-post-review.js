import {useState, useCallback, useEffect} from 'react';

import OperationStatus from '../constants/operation-status';
import provider from '../providers/provider';

const usePostReview = (movieId) => {
  const [status, setStatus] = useState(OperationStatus.UNSET);
  const [cancellation] = useState(provider.getCancellation());

  const postReview = useCallback((localReview) => {
    setStatus(OperationStatus.PENDING);
    provider.postReview(movieId, localReview, cancellation)
      .then(() => {
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
    cancellation.cancel(`Cancelling post review due to unmount`);
  }, [cancellation]);

  return [status, postReview];
};

export {
  usePostReview,
};
