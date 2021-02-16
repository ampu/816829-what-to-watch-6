/**
 * @param {Object<String, Boolean>} classMap
 * @return {String}
 */
const getClassName = (classMap) => {
  return Object.keys(classMap)
    .filter((it) => classMap[it])
    .join(` `);
};


export {
  getClassName,
};
