import {SECONDS_IN_MINUTE} from '../utils/date-util';

const importApiMovie = ({
  id = 0,
  name = ``,
  poster_image: poster,
  preview_image: preview,
  background_image: background,
  background_color: backgroundColor,
  description = ``,
  rating = 0,
  scores_count: scoresCount = 0,
  director = ``,
  starring: stars = [],
  run_time: durationMinutes = 0,
  genre,
  released: year,
  is_favorite: isFavorite = false,
  video_link: video,
  preview_video_link: videoPreview,
}) => {
  return {
    id: id.toString(),
    title: name,
    poster,
    preview,
    background,
    backgroundColor,
    description,
    rating,
    scoresCount,
    director,
    stars,
    durationSeconds: durationMinutes * SECONDS_IN_MINUTE,
    genre,
    year,
    isFavorite,
    video,
    videoPreview,
    primaryBackgroundStyle: backgroundColor ? {backgroundColor} : {},
  };
};

const importApiMovies = (apiMovies) => apiMovies.map(importApiMovie);

export {
  importApiMovie,
  importApiMovies,
};
