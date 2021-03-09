import PropTypes from 'prop-types';

const movieType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  poster: PropTypes.string,
  preview: PropTypes.string,
  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  stars: PropTypes.arrayOf(PropTypes.string),
  durationSeconds: PropTypes.number,
  genre: PropTypes.string,
  year: PropTypes.number,
  isFavorite: PropTypes.bool,
  video: PropTypes.string,
  videoPreview: PropTypes.string,
  primaryBackgroundStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
};

const movieShape = PropTypes.shape(movieType);

export {movieType, movieShape};
