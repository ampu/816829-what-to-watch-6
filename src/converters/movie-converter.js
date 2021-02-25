import {SECONDS_IN_MINUTE} from '../utils/date-util';

const ApiMovieField = {
  POSTER_IMAGE: `poster_image`,
  PREVIEW_IMAGE: `preview_image`,
  BACKGROUND_IMAGE: `background_image`,
  BACKGROUND_COLOR: `background_color`,
  SCORES_COUNT: `scores_count`,
  STARRING: `starring`,
  RUN_TIME: `run_time`,
  IS_FAVORITE: `is_favorite`,
  VIDEO_LINK: `video_link`,
  PREVIEW_VIDEO_LINK: `preview_video_link`,
};

const SECONDARY_BACKGROUND_STYLE = {backgroundColor: `rgba(255, 255, 255, 0.24)`};
const BORDER_BOTTOM_STYLE = {borderBottomStyle: `rgba(255, 255, 255, 0.24)`};

const importApiMovie = ({
  id = ``,
  name = ``,
  [ApiMovieField.POSTER_IMAGE]: poster,
  [ApiMovieField.PREVIEW_IMAGE]: preview,
  [ApiMovieField.BACKGROUND_IMAGE]: background,
  [ApiMovieField.BACKGROUND_COLOR]: backgroundColor,
  description = ``,
  rating = 0,
  [ApiMovieField.SCORES_COUNT]: scoresCount = 0,
  director = ``,
  [ApiMovieField.STARRING]: stars = [],
  [ApiMovieField.RUN_TIME]: durationMinutes = 0,
  genre,
  released: year,
  [ApiMovieField.IS_FAVORITE]: isFavorite = false,
  [ApiMovieField.VIDEO_LINK]: video,
  [ApiMovieField.PREVIEW_VIDEO_LINK]: videoPreview,
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
    secondaryBackgroundStyle: SECONDARY_BACKGROUND_STYLE,
    borderBottomStyle: BORDER_BOTTOM_STYLE,
  };
};

export {
  importApiMovie,
};
