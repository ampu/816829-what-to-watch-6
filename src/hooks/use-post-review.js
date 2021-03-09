import {useState, useCallback, useEffect, useRef} from 'react';

import OperationStatus from '../constants/operation-status';
import provider from '../providers/provider';

const usePostReview = (movieId) => {
  const [status, setStatus] = useState(OperationStatus.UNSET);
  const cancellation = useRef(provider.getCancellation()).current;

  const postReview = useCallback((localReview) => {
    setStatus(OperationStatus.PENDING);
    provider.postReview(movieId, localReview, cancellation)
      .then(() => {
        setStatus(OperationStatus.RESOLVED);
      })
      .catch((_error) => {
        if (cancellation.token.reason) {
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
