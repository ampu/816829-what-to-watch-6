import {useState, useEffect, useRef} from 'react';

import OperationStatus from '../constants/operation-status';
import provider from '../providers/provider';

const useReviews = (movieId) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsStatus, setReviewsStatus] = useState(OperationStatus.PENDING);
  const cancellation = useRef(provider.getCancellation()).current;

  useEffect(() => {
    provider.getReviews(movieId, cancellation)
      .then((newReviews) => {
        setReviews(newReviews);
        setReviewsStatus(OperationStatus.RESOLVED);
      })
      .catch((error) => {
        if (provider.isCancelled(error)) {
          return;
        }
        setReviewsStatus(OperationStatus.REJECTED);
      });

    return () => {
      cancellation.cancel(`Cancelling get reviews due to unmount`);
    };
  }, [cancellation, movieId]);

  return [reviewsStatus, reviews];
};

export {
  useReviews,
};
