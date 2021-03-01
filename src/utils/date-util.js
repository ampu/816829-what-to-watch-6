import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;

const PROGRESS_CONSTRAINT = {min: 0, max: 100};

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
  return clamp(currentSeconds / totalSeconds * PROGRESS_CONSTRAINT.max, PROGRESS_CONSTRAINT);
};

const clamp = (value, {min, max} = {}) => {
  if (max !== undefined && value > max) {
    return max;
  }
  if (min !== undefined && value < min) {
    return min;
  }
  return value;
};

dayjs.extend(durationPlugin);

export {
  SECONDS_IN_MINUTE,
  formatDate,
  formatDuration,
  getProgress,
};
