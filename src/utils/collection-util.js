/**
 * @param {Array<String>} values
 * @param {Object<String, Number>} valueToCount
 * @return {Object<String, Number>}
 */
const countUniqueValues = (values, valueToCount = {}) => {
  return values.reduce((state, value) => {
    state[value] = (state[value] || 0) + 1;
    return state;
  }, valueToCount);
};

/**
 * @param {Object<String, Number>} valueToCount
 * @return {String[]}
 */
const getValuesSortedByCountDescending = (valueToCount) => {
  const values = Object.keys(valueToCount);

  return values.sort((value, anotherValue) => {
    return valueToCount[anotherValue] - valueToCount[value] || value.localeCompare(anotherValue);
  });
};

export {
  countUniqueValues,
  getValuesSortedByCountDescending,
};
