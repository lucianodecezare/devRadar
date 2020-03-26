/**
 * Parse a string as an array.
 *
 * @param {String} arrayAsString String like 'React, Node, React-Native'
 *
 * @returns ['React', 'Node', 'React-Native']
 */
const parseStringAsArray = (arrayAsString) => {
  return arrayAsString.split(',').map((string) => string.trim());
};

module.exports = parseStringAsArray;
