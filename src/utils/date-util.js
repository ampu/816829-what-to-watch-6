import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import clamp from 'lodash.clamp';

const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;

const MAX_PROGRESS = 100;

/**
 * @param {any} date
 * @param {String} formatTemplate
 * @param {String} invalidDateSubstitute
 * @return {String}
 */
const formatDate = (date, formatTemplate, invalidDateSubstitute = ``) => {
  const formattedDate = dayjs(date).format(formatTemplate);

  if (formattedDate === `Invalid Date`) {
    return invalidDateSubstitute;
  }

  return formattedDate;
};

/**
 * @param {Number} totalSeconds
 * @param {String} formatTemplate
 * @param {String} invalidDurationSubstitute
 * @return {String}
 */
const formatDuration = (totalSeconds, formatTemplate, invalidDurationSubstitute = ``) => {
  const formattedDuration = dayjs.duration(totalSeconds * MILLISECONDS_IN_SECOND).format(formatTemplate);

  if (formattedDuration.indexOf(`undefined`) !== -1) {
    return invalidDurationSubstitute;
  }

  return formattedDuration;
};

const getProgress = (totalSeconds, currentSeconds) => {
  return clamp(currentSeconds / totalSeconds * MAX_PROGRESS, MAX_PROGRESS) || 0;
};

const convertMinutesToSeconds = (minutes) => {
  return minutes * SECONDS_IN_MINUTE;
};

dayjs.extend(durationPlugin);

export {
  convertMinutesToSeconds,
  formatDate,
  formatDuration,
  getProgress,
};
